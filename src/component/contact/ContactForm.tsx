import { useRef, useState } from "react";
import countries from "world-countries";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { TextField, MenuItem, Box, FormHelperText } from "@mui/material";
import MotionSection from "../common/MotionSection";
import { motion } from "framer-motion";

// Import your icons
import FacebookIcon from "../../assets/contact/facebook.svg";
import InstagramIcon from "../../assets/contact/instagram.svg";
import GoogleIcon from "../../assets/contact/google.svg";
import LinkIcon from "../../assets/contact/linkedin.svg";
import XIcon from "../../assets/contact/x.svg";
import AIOHImage from "../../assets/contact/aiohlogo.png";
import { useLocation } from "react-router-dom";

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  // Styles for the text fields
  const textFieldStyles = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "20px",
      fontSize: "16px",
      fontWeight: 400,
      pl: 2,
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#19181899", // 60% opacity border
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#191818",
    },
    "& .MuiInputLabel-root": {
      fontSize: "16px",
      fontWeight: 300,
      color: "#19181899",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#191818",
      fontWeight: 400,
    },
    "& .MuiInputBase-input::placeholder": {
      fontSize: "16px",
      fontWeight: 300,
      color: "#191818",
    },
    "& .MuiFormHelperText-root": {
      color: "#19181866",
      fontSize: "12px",
    },
  };

  // errors state
  const [errors, setErrors] = useState({
    from_name: false,
    from_company: false,
    from_phone: false,
    from_email: false,
    main_service: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // show error only if empty
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() === "",
    }));
  };

  const [phone, setPhone] = useState({
    countryCode: "94",
    number: "",
  });

  const isValidPhone = (phone: string) => {
    // Validate international phone number format
    return /^\+\d{8,15}$/.test(phone);
  };

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    const formData = new FormData(form.current);
    const name = formData.get("from_name")?.toString().trim();
    const company = formData.get("from_company")?.toString().trim();
    const email = formData.get("from_email")?.toString().trim();
    const service = formData.get("main_service")?.toString().trim();

    // Combine phone number with country code
    const fullPhoneNumber = `+${phone.countryCode}${phone.number}`;

    const newErrors = {
      from_name: !name,
      from_company: !company,
      from_phone: !phone.number || !isValidPhone(fullPhoneNumber),
      from_email: !email || !isValidEmail(email),
      main_service: !service,
    };

    setErrors(newErrors);
    const hasError = Object.values(newErrors).some(Boolean);
    if (hasError) return;

    // Remove any previous hidden phone input before adding a new one
    const prevPhoneInput = form.current.querySelector(
      'input[name="from_phone"]'
    );
    if (prevPhoneInput) {
      form.current.removeChild(prevPhoneInput);
    }
    // Create a hidden input for the full phone number
    const phoneInput = document.createElement("input");
    phoneInput.type = "hidden";
    phoneInput.name = "from_phone";
    phoneInput.value = fullPhoneNumber;
    form.current.appendChild(phoneInput);

    setIsSending(true);

    emailjs
      .sendForm("service_yxj2rit", "template_d3x0uv7", form.current, {
        publicKey: "vC8wukAc-UNdnr0Cu",
      })
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            title: "Message Sent!",
            html: "Thanks for contacting us, We have received your message.<br/>We'll get back to you soon.",
            imageUrl: AIOHImage,
            imageWidth: 200,
            imageAlt: "Success",
            showConfirmButton: true,
            confirmButtonText: "OK",
            customClass: {
              popup: "!rounded-[20px] p-6",
              title: "text-[22px] font-semibold",
              image: "object-contain",
              htmlContainer: "!text-[16px]",
              confirmButton:
                "w-full mt-4 bg-primary text-secondary text-lg font-medium rounded-full py-3 px-10 cursor-pointer",
            },
            buttonsStyling: false,
          });
          form.current?.reset();
          // setSelectedQuestion("");
          setPhone({ countryCode: "94", number: "" });
          setErrors({
            from_name: false,
            from_company: false,
            from_phone: false,
            from_email: false,
            main_service: false,
          });
          setIsSending(false);
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            html: "A system or user network error occurred.<br/>Please try again shortly.",
            customClass: {
              popup: "!rounded-[20px] p-6",
              title: "text-[22px] font-semibold",
              image: "object-contain",
              confirmButton:
                "w-full mt-4 bg-red-400 text-white text-lg font-medium rounded-full py-3 px-10 cursor-pointer",
            },
            buttonsStyling: false,
          });
          setIsSending(false);
        }
      );
  };

  // Get current path using useLocation hook
  const location = useLocation();

  // Extract last part of URL like "marketing", "design", etc.
  const currentPath = location.pathname.split("/").filter(Boolean).pop() || "";

  // Main services dropdown options
  const services = [
    { label: "Marketing", value: "Marketing" },
    { label: "Technology", value: "Technology" },
    { label: "Design", value: "Design" },
  ];

  // Questions for each main service
  // const Question: Record<string, { label: string; value: string }[]> = {
  //   Marketing: [
  //     {
  //       label: "How can I increase my sales?",
  //       value: "How can I increase my sales?",
  //     },
  //     {
  //       label: "How do I improve my brand visibility online?",
  //       value: "How do I improve my brand visibility online?",
  //     },
  //     {
  //       label: "Can you help me with SEO?",
  //       value: "Can you help me with SEO?",
  //     },
  //   ],
  //   Technology: [
  //     {
  //       label: "Do you provide mobile app development?",
  //       value: "Do you provide mobile app development?",
  //     },
  //     {
  //       label: "How do you ensure website security?",
  //       value: "How do you ensure website security?",
  //     },
  //     {
  //       label: "Do you offer ongoing maintenance and support?",
  //       value: "Do you offer ongoing maintenance and support?",
  //     },
  //   ],
  //   Design: [
  //     {
  //       label: "Do you provide UX/UI design services?",
  //       value: "Do you provide UX/UI design services?",
  //     },
  //     {
  //       label: "How can I make my website look more modern?",
  //       value: "How can I make my website look more modern?",
  //     },
  //     {
  //       label: "Do you create mobile-friendly designs?",
  //       value: "Do you create mobile-friendly designs?",
  //     },
  //   ],
  // };

  // Default selected service based on current path
  const capitalizeFirstLetter = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  const defaultService =
    services.find((s) => s.value === capitalizeFirstLetter(currentPath))
      ?.value || "";

  // State to manage selected main service
  // const [selectedMainService, setSelectedMainService] =
  //   useState(defaultService);

  // const [selectedQuestion, setSelectedQuestion] = useState("");

  // State to manage sending state for the button
  const [isSending, setIsSending] = useState(false);

  return (
    <>
      {/* Mobile & Tablet Heading - show only below lg */}
      <MotionSection
        delay={0.5}
        direction="fade"
        className="block lg:hidden mb-2 w-full text-center"
      >
        {/* <h2 className="text-[24px] md:text-[30px] leading-[26px] font-bold text-[#191818]">
          Reach Out, We're Listening
        </h2>
        <p className="text-[16px] leading-[26px] text-[#191818] mt-4 font-light">
          We're ready to assist. Share the details below and we'll get back to
          you soon.
        </p> */}
        <h1 className="text-[26px] md:text-3xl lg:text-5xl lg:leading-[62px] font-bold">
          Ready to Grow Your
          <br />
          <span className="text-primary">Business?</span>
        </h1>
        <p className="lg:w-1/2 mt-4 text-sm lg:text-lg leading-6 md:leading-6 lg:leading-7 font-light text-center">
          Stop guessing. Let's create a plan that actually works. Schedule your
          free consultation call today.
        </p>
      </MotionSection>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 space-y-10 lg:space-y-6 lg:pt-2 lg:pr-4"
      >
        {/* <div className="lg:hidden block text-center justify-center">
          <h1 className="text-[26px] md:text-3xl lg:text-5xl lg:leading-[62px] font-bold">
            Ready to Grow Your
            <br />
            <span className="text-primary">Business?</span>
          </h1>
          <p className="lg:w-1/2 mt-4 text-sm lg:text-lg leading-6 md:leading-6 lg:leading-7 font-light text-center">
            Stop guessing. Let's create a plan that actually works. Schedule
            your free consultation call today.
          </p>
        </div> */}
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
          {/* Name */}
          <Box sx={{ width: "100%" }}>
            <TextField
              name="from_name"
              label="First name and last name"
              fullWidth
              error={errors.from_name}
              helperText={errors.from_name ? "Name is required." : ""}
              onChange={handleInputChange}
              sx={textFieldStyles}
            />
          </Box>

          {/* Company */}
          <Box sx={{ width: "100%" }}>
            <TextField
              name="from_company"
              label="Company name"
              fullWidth
              error={errors.from_company}
              helperText={
                errors.from_company ? "Company name is required." : ""
              }
              onChange={handleInputChange}
              sx={textFieldStyles}
            />
          </Box>

          {/* Email */}
          <Box sx={{ width: "100%" }}>
            <TextField
              name="from_email"
              label="E-mail"
              fullWidth
              error={errors.from_email}
              helperText={
                errors.from_email ? "Please enter a valid email address." : ""
              }
              onChange={handleInputChange}
              sx={textFieldStyles}
            />
          </Box>

          {/* Phone */}
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                width: "100%",
                "& > *:first-of-type": {
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20px 0 0 20px",
                    borderRight: "none",
                  },
                },
                "& > *:last-child": {
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "0 20px 20px 0",
                  },
                },
              }}
            >
              {/* Country Code Selector */}
              <TextField
                select
                name="country_code"
                value={phone.countryCode}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setPhone((prev) => ({
                    ...prev,
                    countryCode: e.target.value,
                  }));
                  setErrors((prev) => ({
                    ...prev,
                    from_phone: !isValidPhone(
                      `+${e.target.value}${phone.number}`
                    ),
                  }));
                }}
                sx={textFieldStyles}
                SelectProps={{
                  MenuProps: {
                    PaperProps: {
                      sx: {
                        maxHeight: 300, // Limit dropdown height
                        marginTop: 0.5, // Small gap from the input field
                        marginLeft: "3.75%", // Align with the input field
                        width: "350px", // Fixed width for dropdown
                        // Shadow and border styling
                        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                        border: "1px solid #e0e0e0",
                        borderRadius: "12px",
                        // Positioning
                        transform: "translateY(8px) !important", // Ensure it appears right below
                      },
                    },
                  },
                  renderValue: (value: unknown) => (
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      {
                        countries.find(
                          (country) =>
                            country.idd.root.replace("+", "") +
                              (country.idd.suffixes[0] || "") ===
                            value
                        )?.flag
                      }
                      <Box sx={{ ml: 1 }}>+{value as string}</Box>
                    </Box>
                  ),
                }}
              >
                {countries.map((country) => (
                  <MenuItem
                    key={country.cca2}
                    value={
                      country.idd.root.replace("+", "") +
                      (country.idd.suffixes[0] || "")
                    }
                    sx={{
                      padding: "8px 16px", // Compact padding
                      "&:hover": {
                        backgroundColor: "#f5f5f5", // Hover effect
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <Box sx={{ mr: 1, minWidth: "24px" }}>{country.flag}</Box>
                      <Box sx={{ minWidth: "60px" }}>
                        +
                        {country.idd.root.replace("+", "") +
                          (country.idd.suffixes[0] || "")}
                      </Box>
                      <Box
                        sx={{
                          ml: 2,
                          opacity: 0.7,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          maxWidth: "200px",
                        }}
                      >
                        {country.name.common}
                      </Box>
                    </Box>
                  </MenuItem>
                ))}
              </TextField>

              {/* Phone Number Input */}
              <TextField
                name="phone_number"
                value={phone.number}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  // Remove any non-digit characters
                  const cleanedValue = e.target.value.replace(/\D/g, "");
                  setPhone((prev) => ({
                    ...prev,
                    number: cleanedValue,
                  }));
                  setErrors((prev) => ({
                    ...prev,
                    from_phone: !isValidPhone(
                      `+${phone.countryCode}${cleanedValue}`
                    ),
                  }));
                }}
                error={errors.from_phone}
                placeholder="Phone number"
                sx={{
                  ...textFieldStyles,
                  flex: 1,
                  "& .MuiOutlinedInput-root": {
                    paddingLeft: "14px",
                  },
                }}
              />
            </Box>

            {errors.from_phone && (
              <FormHelperText
                sx={{
                  color: "#d32f2f",
                  fontSize: "12px",
                  ml: "14px",
                  mt: "4px",
                }}
              >
                Please enter a valid phone number (8-15 digits)
              </FormHelperText>
            )}
          </Box>

          {/* Main service Dropdown */}
          <Box sx={{ width: "100%" }}>
            <TextField
              name="main_service"
              label="Select a service"
              select
              fullWidth
              defaultValue={defaultService}
              error={errors.main_service}
              helperText={
                errors.main_service ? "Please select a main service." : ""
              }
              sx={textFieldStyles}
              onChange={(e) => {
                handleInputChange(e);
                // setSelectedMainService(e.target.value);
              }}
            >
              {services.map((service) => (
                <MenuItem key={service.value} value={service.value}>
                  {service.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>

          {/* Questionss Dropdown */}
          {/* <Box sx={{ width: "100%" }}>
            <TextField
              name="question"
              label="What do you want to ask?"
              select
              fullWidth
              value={selectedQuestion}
              onChange={(e) => setSelectedQuestion(e.target.value)}
              error={errors.question && !selectedQuestion}
              helperText={
                !selectedQuestion && errors.question
                  ? "Please select a question do you want to ask?."
                  : ""
              }
              sx={textFieldStyles}
            >
              {Question[selectedMainService]?.map((sub) => (
                <MenuItem key={sub.value} value={sub.value}>
                  {sub.label}
                </MenuItem>
              ))}
            </TextField>
          </Box> */}

          {/* Message */}
          <Box sx={{ width: "100%" }}>
            <TextField
              name="message"
              label="Brief About requirement"
              multiline
              rows={6}
              fullWidth
              onChange={handleInputChange}
              sx={textFieldStyles}
            />
          </Box>
          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSending}
            className={`w-full lg:w-fit mt-4 text-[18px] font-medium rounded-full py-[12px] px-6  transition cursor-pointer ${
              isSending
                ? "bg-primary/60 text-[#19181899] cursor-not-allowed"
                : "bg-primary text-[#191818] hover:bg-primary/80"
            }`}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      {/* Right Side: Content & Cards */}
      <MotionSection
        delay={0.7}
        direction="up"
        className="w-full lg:w-1/2 flex flex-col"
      >
        {/* Desktop Heading & Description - show only lg and above */}
        {/* <div className="hidden lg:block">
          <h2 className="text-[26px] lg:text-[48px] md:text-[30px] leading-[40px] lg:leading-[40px] font-bold text-[#191818]">
            Reach Out, We're Listening
          </h2>
          <p className="text-[16px] lg:text-[18px] leading-[26px] lg:leading-[28px] text-[#191818] mt-6 font-light mb-[-20px]">
            We're ready to assist. Share your technology needs below, <br /> and
            we'll get back to you soon.
          </p>
        </div> */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="hidden lg:block"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[26px] md:text-3xl lg:text-5xl lg:leading-[62px] font-bold w-2/3 lg:w-full"
          >
            Ready to Grow Your
            <br />
            <span className="text-primary">Business?</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-4 text-sm lg:text-lg leading-6 md:leading-7 lg:leading-8 font-light text-justify"
          >
            Stop guessing. Let's create a plan that actually works. Schedule
            your free consultation call today.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:mt-10 ">
          {/* Card 1 - Address */}
          <MotionSection
            delay={0.7}
            direction="right"
            className="bg-white rounded-[20px] p-6 shadow-sm"
          >
            <p className="text-[18px] font-normal mb-1">Address :</p>
            <p className="text-[16px] text-[#191818] leading-[24px] font-light">
              {/* 3rd Floor, All in one Holdings, <br /> */}
              349/2/1, Katugastota Rd, <br />
              Kandy, Sri Lanka.
            </p>
          </MotionSection>

          {/* Card 2 - Phone - Gradient */}
          <MotionSection
            delay={0.7}
            direction="right"
            className="rounded-[20px] p-6 shadow-sm text-white  bg-[linear-gradient(180deg,_#01213A_0%,_#035BA0_100%)]"
          >
            <p className="text-[18px] font-normal mb-1">Phone :</p>
            <p className="text-[16px] text-white leading-[32px] font-light">
              +94 81 2121 051 <br />
              +94 77 6722 709
            </p>
          </MotionSection>

          {/* Card 3 - Email */}
          <MotionSection
            delay={0.7}
            direction="right"
            className="bg-white rounded-[20px] p-6 shadow-sm"
          >
            <p className="text-[18px] font-normal mb-1">E-mail :</p>
            <p className="text-[16px] text-[#191818] leading-[24px] font-light">
              <a href="mailto:info@allinoneholdings.com">
                info@allinoneholdings.com
              </a>
            </p>
          </MotionSection>

          {/* Card 4 - Social Icons */}
          <MotionSection
            delay={0.7}
            direction="right"
            className="rounded-xl p-6 flex flex-col items-center md:items-start justify-center gap-4"
          >
            <p className="text-[18px] font-normal mb-1 text-center lg:text-left">
              Follow Us:
            </p>
            <div className="flex flex-wrap  gap-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/allinoneholdings"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#02EC97] border-2 border-[#02EC97] flex items-center justify-center transition hover:opacity-80"
              >
                <img
                  src={FacebookIcon}
                  alt="Facebook"
                  className="w-[18px] h-[18px]"
                />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/all_in_one_holdings"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#02EC97] border-2 border-[#02EC97] flex items-center justify-center transition hover:opacity-80"
              >
                <img
                  src={InstagramIcon}
                  alt="Instagram"
                  className="w-[18px] h-[18px]"
                />
              </a>

              {/* Google */}
              <a
                href="https://g.co/kgs/Cw4rrUZ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#02EC97] border-2 border-[#02EC97] flex items-center justify-center transition hover:opacity-80"
              >
                <img
                  src={GoogleIcon}
                  alt="Google"
                  className="w-[18px] h-[18px]"
                />
              </a>

              {/* Linkedin */}
              <a
                href="https://lk.linkedin.com/company/all-in-one-holdings"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#02EC97] border-2 border-[#02EC97] flex items-center justify-center transition hover:opacity-80"
              >
                <img src={LinkIcon} alt="X" className="w-[18px] h-[18px]" />
              </a>
              {/* X com */}
              <a
                href="https://x.com/allinoneholding"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#02EC97] border-2 border-[#02EC97] flex items-center justify-center transition hover:opacity-80"
              >
                <img src={XIcon} alt="X" className="w-[18px] h-[18px]" />
              </a>
            </div>
          </MotionSection>
        </div>
      </MotionSection>
    </>
  );
};

export default ContactForm;
