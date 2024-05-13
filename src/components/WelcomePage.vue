<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center mb-4">
        <h1><span class="name">The Third Space</span></h1>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6 col-sm-12 offset-md-4">
        <h3 class="mb-3 ml-auto">About Us</h3>
        <p class="aboutus text-center">
          Third Space is a container for exploring the limits of our epistemic
          and emotional growth. We conduct courses, workshops, seminars, and
          activities that provide different frameworks for sense-making about
          ourselves, the world and our relationship to the world.
        </p>
      </div>
    </div>

    <hr />

    <div class="row">
      <div class="col-md-6 col-sm-12 offset-md-4">
        <h3 class="vibe-title">The Vibe</h3>
        <p class="ml-auto vibe-title-para">
          Third Space is where every vibe under the sun spins. It's a container
          where every emotion finds its place. No question is stupid and no
          inquiry is irrelevant. Here are a few questions that we are currently
          excited about exploring:
        </p>
        <ul class="vibe-questions">
          <li>
            How do we find meaning in this seemingly meaningless world? Is that
            even a valid pursuit?
          </li>
          <li>
            How can we better navigate this sense of overwhelm in this deeply
            connected world that is constantly craving for our attention?
          </li>
          <li>
            Are there underlying hidden patterns behind most of the world's
            crises? How can we study and address those?
          </li>
          <li>
            What are some reliable methods to avoid cognitive traps that humans
            are prone to? And what heuristics can we learn to improve the
            quality of our thinking?
          </li>
          <li>
            What outlooks and practices can fundamentally change how we relate
            to ourselves and others around us?
          </li>
          <li>
            How can we acquire more agency to make progress on our goals? Does
            the goal focused approach to life ends up creating more suffering
            overall?
          </li>
          <li>
            How can we create a healthy information ecosystem and improve the
            public discourse in today's attention economy?
          </li>
          <li>
            Are there more compassionate and non zero-sum techniques of
            cooperation and coordination for solving societal problems?
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h3 class="vibe-title">Updates</h3>
        <div class="row mt-4">
          <div class="col-md-8 col-sm-12 offset-md-2 text-center">
            <p class="update">
              We are in the process of designing the Third Space. If you are
              interested in tracking its growth, consider signing up for future
              updates.
            </p>
            <div class="d-flex justify-content-center">
              <div>
                <input
                  v-model="email"
                  type="email"
                  class="form-control"
                  placeholder="Your Email Address"
                  style="margin: auto; width: 80%"
                />
              </div>
              <div>
                <button
                  type="button"
                  @click="submitEmail"
                  class="btn btn-primary signupbutton"
                >
                  Sign Up
                </button>
              </div>
            </div>
            <p v-if="signupMessage" class="mt-2">{{ signupMessage }}</p>
          </div>
        </div>
      </div>
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
.aboutus {
  max-width: 550px; /* Or any other suitable width */
  margin: 0 auto; /* Center the description */
  line-height: 1.3;
  text-align: justify;
}
h3 {
  color: #333;
  font-size: 1.6rem;
  margin-bottom: 20px; /* Spacing below the title */
}
p {
  color: #555;
  font-size: 1.2rem;
  line-height: 1.3;
}
li {
  color: #555;
  font-size: 1.1rem;
  line-height: 1.3;
  font-family: "Times New Roman", Times, serif;
}
.vibe-title {
  color: #333;
  font-size: 1.6rem;
  margin-bottom: 20px; /* Spacing below the title */
}

.vibe-title-para {
  max-width: 540px;
  text-align: justify;
}

.vibe-questions {
  list-style-type: none; /* Removes default bullets */
  padding-left: 0; /* Removes default padding */
  margin-left: auto; /* Center alignment of the list */
  margin-right: auto;
  max-width: 400px; /* Adjust as necessary for width */
  text-align: justify; /* Text alignment */
}

.vibe-questions li {
  padding-left: 30px; /* Sufficient space for custom bullet + text */
  position: relative; /* Allows precise positioning of pseudo-elements */
  margin-bottom: 10px; /* Consistent bottom margin */
}

.vibe-questions li::before {
  content: "➜"; /* Unicode for bullet */
  position: absolute; /* Absolute positioning relative to the li */
  left: 0; /* Bullet at the very start of the li block */
  top: 0; /* Aligns bullet to the top of the text */
  color: black; /* Bullet color */
  width: 20px; /* Width of the space allocated for the bullet */
  margin-right: 10px; /* Right margin to space bullet from text */
}

.update {
  color: #555;
  font-size: 1.2rem;
  line-height: 1.3;
  max-width: 540px;
  text-align: justify;
}
.container {
  background-color: #ebf5fb; /* Light blue background */
  min-height: 100vh; /* Full view height */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 5vh;
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

.signupbutton {
  margin-top: 4px; /* Add space between the input and button */
  color: #ffffff; /* White text */
  background-color: #007bff; /* Bootstrap primary blue */
  border-color: #007bff; /* Same as the background for a solid look */

  padding: 0.375rem 0.75rem; /* Bootstrap's default padding for buttons */
  font-size: 1rem; /* Default font size for buttons */
  line-height: 1.1; /* Line height for buttons */
  border-radius: 0.25rem; /* Rounded corners */

  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out; /* Smooth transition for hover effects */

  display: inline-block; /* Necessary for proper spacing and alignment */
  text-align: center; /* Centers text within the button */
  vertical-align: middle; /* Aligns button text vertically */
  cursor: pointer; /* Changes cursor to pointer to indicate button */
  user-select: none; /* Prevents text selection */
  border: 1px solid transparent; /* Borders should be transparent initially */

  text-decoration: none; /* Removes underline from links styled as buttons */
}

.btn-primary:hover {
  background-color: #0056b3; /* Darker blue on hover */
  border-color: #0056b3; /* Border color changes on hover to match */
}

.btn-primary:focus,
.btn-primary.focus {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5); /* Adds a glow effect around button when focused */
}

.btn-primary:active {
  background-color: #004885; /* Even darker blue when active */
  border-color: #004085; /* Matching border color for active state */
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); /* Inner shadow to simulate a pressed button */
}

.btn-primary:disabled {
  background-color: #007bff; /* Keeps the same background color */
  border-color: #007bff; /* Keeps the same border color */
  opacity: 0.65; /* Adds transparency to indicate disabled state */
  cursor: not-allowed; /* Changes cursor to indicate the button is disabled */
}

.form-control {
  font-size: 1rem; /* Standard font size for readability */
  padding: 0.375rem 0.75rem; /* Padding similar to Bootstrap's input fields */
  border: 1px solid #ced4da; /* Light gray border as seen in Bootstrap forms */
  border-radius: 0.25rem; /* Rounded corners */
  outline: none; /* Removes default focus outline */

  background-color: #ffffff; /* White background */
  color: #495057; /* Dark gray text color */

  display: block; /* Makes the input block level so it occupies its own line */
  box-sizing: border-box; /* Includes padding and border in the width */

  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; /* Smooth transition for focus effects */
}

.form-control:focus {
  border-color: #80bdff; /* Light blue border on focus */
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); /* Blue glow effect around the input when focused */
}

.form-control::placeholder {
  /* Styling for placeholder text */
  color: #6c757d; /* Lighter text color for placeholders */
  opacity: 1; /* Full opacity for placeholder text */
}

.form-control:disabled,
.form-control[readonly] {
  background-color: #e9ecef; /* Lighter background for disabled state */
  opacity: 1; /* Full opacity to ensure readability */
}

/* Responsive styles */
@media (max-width: 768px) {
  /* Adjust for tablets */
  h1 {
    font-size: 2.5rem; /* Smaller font size for h1 */
  }

  .description {
    font-size: 1rem; /* Smaller font size for description */
    padding: 0 20px; /* Add padding on the sides */
  }
}

@media (max-width: 480px) {
  /* Adjust for mobile phones */
  h1 {
    font-size: 2rem; /* Even smaller font size for h1 */
  }

  .description,
  .signup {
    padding: 0 10px; /* Less padding for very small screens */
  }
}
</style>
