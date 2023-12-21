import {
  Document,
  Page,
  Text,
  StyleSheet,
  View,
  PDFViewer,
} from "@react-pdf/renderer";

import { useEffect } from "react";

const PaymentPDF = ({ payment }) => {
  const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
    },
    header: {
      fontWeight: "bold",
      fontSize: 32,
      marginBottom: 20,
      textAlign: "center",
    },
    section: {
      margin: 10,
      padding: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: 1,
      borderBottomColor: "#ccc",
    },
    sectionTitle: {
      fontWeight: "bold",
    },
    sectionContent: {
      flex: 2,
    },
    totalAmount: {
      fontSize: 18,
      textAlign: "right",
      marginTop: 20,
      marginRight: 20,
      fontWeight: "bold",
    },
  });

  useEffect(()=>{
    console.log(payment)
  })
  return (
    <PDFViewer width={"100%"} height={400}>
      <Document>
        <Page size="A4" style={styles.page}>
          <Text style={styles.header}>Payment Details</Text>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Payment ID: </Text>
            <Text style={styles.sectionContent}>{payment?._id}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Client name: </Text>
            <Text style={styles.sectionContent}>{payment?.clientId?.name}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Apartment name: </Text>
            <Text style={styles.sectionContent}>{payment?.appartementId.name}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Date: </Text>
            <Text style={styles.sectionContent}>{new Date(payment?.date).toLocaleDateString()}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Price Per Month: </Text>
            <Text style={styles.sectionContent}>${payment?.prixParMois}</Text>
          </View>
          <View style={styles.totalAmount}>
            <Text>Total: ${payment?.prixParMois}</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default PaymentPDF;
