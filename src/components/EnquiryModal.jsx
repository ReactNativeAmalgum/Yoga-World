import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";

export default function EnquiryModal({ show, onHide }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    classType: '',
    timeShift: '',
    comments: '',
  });
  const [isRobot, setIsRobot] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  // Handle changes to form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    setIsRobot(e.target.checked);
  };

  // Handle ReCAPTCHA change
  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaValue && isRobot) {
      console.log("Form submitted:", formData);
      onHide(); // Close the modal on successful submission
    } else {
      console.log("Please complete the captcha and checkbox");
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Enquiry Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="John"
              value={formData.name}
              onChange={handleChange}
              autoFocus
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Phone No.</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              placeholder="+91 8833222333"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="classType">
            <Form.Label>Select Classes</Form.Label>
            <Form.Select
              name="classType"
              value={formData.classType}
              onChange={handleChange}
              required
            >
              <option value="">Select a Class...</option>
              <option value="offline">Offline Classes</option>
              <option value="online">Online Classes</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="timeShift">
            <Form.Label>Time Shift</Form.Label>
            <Form.Select
              name="timeShift"
              value={formData.timeShift}
              onChange={handleChange}
              required
            >
              <option value="">Select a Time Shift...</option>
              <option value="6am-7am">6am - 7am</option>
              <option value="7am-8am">7am - 8am</option>
              <option value="8am-9am">8am - 9am</option>
              <option value="9am-10am">9am - 10am</option>
              <option value="10am-11am">10am - 11am</option>
              <option value="11am-12pm">11am - 12pm</option>
              <option value="5pm-6pm">5pm - 6pm</option>
              <option value="6pm-7pm">6pm - 7pm</option>
              <option value="7pm-8pm">7pm - 8pm</option>
              <option value="8pm-9pm">8pm - 9pm</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="I'm not a robot"
              checked={isRobot}
              onChange={handleCheckboxChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="comments">
            <Form.Label>Comments</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="comments"
              value={formData.comments}
              onChange={handleChange}
            />
          </Form.Group>
          <div className="mb-3">
            <ReCAPTCHA
              sitekey="YOUR_SITE_KEY" // Replace with your actual site key
              onChange={handleCaptchaChange}
            />
          </div>
          <Button
            variant="primary"
            type="submit"
            disabled={!isRobot || !captchaValue} // Disable if captcha is not filled or checkbox is not checked
          >
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
