import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DonationForm from "./DonationForm";

export default function App() {
  return (
    <div className="form-wrapper">
      <div className="App">
        <DonationForm />
      </div>
    </div>
  );
}
