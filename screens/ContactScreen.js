import { ScrollView, Text, StyleSheet } from "react-native";
import { Card } from "react-native-elements";

const ContactScreen = () => {
  return (
    <ScrollView>
      <Card wrapperStyle={{ margin: 10 }}>
        <Card.Title>Contact Information</Card.Title>
        <Card.Divider />
        <Text>1 Nucamp Way</Text>
        <Text>Seattle, WA 98001</Text>
        <Text style={styles.contactText}>U.S.A.</Text>
        <Text>Phone: 1-206-555-1234</Text>
        <Text>Email: campsites@nucamp.co</Text>
        {/* <Text>{`1 Nucamp Way\nSeattle, WA 98001\nU.S.A.\n\nPhone: 1-206-555-1234\nEmail: campsites@nucamp.co`}</Text> */}
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contactText: {
    marginBottom: 10,
  },
});

export default ContactScreen;
