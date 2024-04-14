<template>
  <div class="container">
    <h1><span class="name">Insight Gateway</span></h1>
    <h3 class="description">
      A space to explore ideas for improving our epistemic and emotional
      wellbeing.
    </h3>
    <div class="signup">
      <p>
        If you would like to keep up with the updates on Insight Gateway,
        consider signing up.
      </p>
      <input v-model="email" type="email" placeholder="Your Email Address" />
      <button @click="submitEmail">Sign Up</button>
      <p v-if="signupMessage">{{ signupMessage }}</p>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase-config"; // adjust the path as necessary
import { collection, addDoc } from "firebase/firestore";

export default {
  name: "WelcomePage",
  data() {
    return {
      email: "",
      signupMessage: "",
    };
  },
  methods: {
    async submitEmail() {
      if (this.email) {
        try {
          await addDoc(collection(db, "emails"), {
            email: this.email,
            timestamp: new Date(),
          });
          this.signupMessage = "Thank you for signing up!";
          this.email = ""; // Clear the input box
        } catch (error) {
          console.error("Error adding document: ", error);
          this.signupMessage = "An error occurred. Please try again later.";
        }
      } else {
        this.signupMessage = "Please enter a valid email address.";
      }
    },
  },
};
</script>

<style scoped>
.container {
  background-color: #ebf5fb; /* Light blue background */
  min-height: 100vh; /* Full view height */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 10vh;
  text-align: center;
}

h1 {
  color: #333;
  margin: 0;
  margin-bottom: 5px;
  font-size: 3rem; /* Larger font size for the header */
}

.name {
  font-weight: bold;
  color: #0056b3;
}

.description {
  color: #555;
  line-height: 1.6;
  margin-bottom: 40px; /* More space before the signup section */
  max-width: 600px; /* Optimal line length for readability */
}

.signup {
  width: 100%;
  max-width: 360px; /* Set a maximum width for the email input and button */
  margin-top: 20px;
}

.signup input {
  margin-right: 10px;
  padding: 10px;
  border: 2px solid #0056b3; /* Thicker border for emphasis */
  border-radius: 4px;
  width: calc(100% - 90px); /* Adjust width to accommodate button */
  box-sizing: border-box; /* Include padding and border in the width */
}

.signup button {
  padding: 10px 20px;
  margin-top: 4px;
  background-color: #0056b3; /* A darker shade of blue */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.signup button:hover {
  background-color: #003f7f; /* Even darker for hover state */
}
</style>
