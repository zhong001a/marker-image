import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const navigate = useNavigate();
  
    const handleFileChange = (e) => {
      const selectedFile = e.target.files[0];
  
      setFile(selectedFile);
  
      const previewURL = URL.createObjectURL(selectedFile);
      setPreview(previewURL);
  
    };
  
    const handleUpload = async () => {
      try {
        const formData = new FormData();
        formData.append("image", file);
        console.log(formData)
  
  
        await axios.post("http://localhost:5000/uploadim", formData);
    
      } catch (error) {
        console.error("Error uploading image", error);
      }
      navigate("/create", { state: { imageName: file.name } });
    };
  
    return (
      <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload Image</button>
  
        {preview && (
          <div>
            <h2>Selected Image Preview</h2>
            <img
              src={preview}
              alt="Selected"
              style={{ maxWidth: "100%", maxHeight: "300px" }}
            />
          </div>
        )}
  
  
      </div>
    );
}

export default Home