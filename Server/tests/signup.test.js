

const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const { sendMail } = require('../services/email');
const { signup } = require('../conrollers/authController'); // Replace 'your-module' with the actual module path

// Mock dependencies
jest.mock('../models/user');
jest.mock('bcryptjs');
jest.mock('validator');
jest.mock('jsonwebtoken');
jest.mock('../services/email');

describe('signup function', () => {
  const req = {
    body: {
      name: 'John Doe',
      email: 'mary@gmail.com',
      password: '',
    },
  };

  const res = {
    status: jest.fn(() => res),
    json: jest.fn(),
  };

  beforeEach(() => {
    // Clear mock calls before each test
    jest.clearAllMocks();
  });

  it('should return an error if name is not provided', async () => {
    validator.isLength.mockReturnValue(false);

    await signup(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'Le nom est requis.' });
  });

  it('should return an error if email is invalid', async () => {
    validator.isLength.mockReturnValue(true);
    validator.isEmail.mockReturnValue(false);

    await signup(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'Adresse e-mail invalide.' });
  });

  it('should return an error if password length is less than 6', async () => {
// 
    validator.isLength.mockReturnValue(true);
    validator.isEmail.mockReturnValue(true);
    validator.isStrongPassword.mockReturnValue(false);


    await signup(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      error: 'Le mot de passe doit avoir au moins 6 caractères.',
    });
  });

  it('should return an error if user already exists', async () => {
    validator.isLength.mockReturnValue(true);
    validator.isEmail.mockReturnValue(true);
    validator.isStrongPassword.mockReturnValue(true);
    User.findOne.mockResolvedValue({ email: req.body.email });

    await signup(req, res);

    // expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ err: 'user already exists' });
  });

  it('should create a new user and send verification email', async () => {
    validator.isLength.mockReturnValue(true);
    validator.isEmail.mockReturnValue(true);
    validator.isStrongPassword.mockReturnValue(true);
    User.findOne.mockResolvedValue(null);
    bcryptjs.hash.mockResolvedValue('hashedPassword');
    const saveMock = jest.fn();
    User.mockImplementation(() => ({ save: saveMock }));
    jwt.sign.mockReturnValue('fakeToken');

    await signup(req, res);

    expect(saveMock).toHaveBeenCalled();
    expect(jwt.sign).toHaveBeenCalledWith({ userId: expect.any(Object) }, process.env.JWT_SECRET);
    expect(sendMail).toHaveBeenCalledWith(req.body.email, 'fakeToken');
    expect(res.json).toHaveBeenCalledWith({ success: true, message: 'Check your email to verify.' });
  });

  it('should handle errors and return 500 status', async () => {
    validator.isLength.mockReturnValue(true);
    validator.isEmail.mockReturnValue(true);
    validator.isStrongPassword.mockReturnValue(true);
    User.findOne.mockRejectedValue(new Error('Database error'));

    await signup(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ success: false, error: 'Database error' });
  });
});
