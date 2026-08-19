import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function FaceLogin() {
  const videoRef = useRef(null);

  const [cameraStarted, setCameraStarted] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const startCamera = async () => {
    try {
      setError("");

      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      setCameraStarted(true);
    } catch (err) {
      console.error(err);

      setError(
        "Camera permission was denied or the camera is unavailable."
      );
    }
  };

  const captureFace = () => {
    console.log("Face captured");

    // We will connect this to the backend later.
    navigate("/chat");
  };

  return (
    <div className="auth-page">
      <div className="auth-card face-card">

        <div className="logo">
          RAG<span>CHAT</span>
        </div>

        <h1>Face Login</h1>

        <p className="subtitle">
          Look directly at the camera to continue
        </p>

        <div className="camera-container">

          {!cameraStarted && (
            <div className="camera-placeholder">
              📷
            </div>
          )}

          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="camera-video"
          />

        </div>

        {error && (
          <p className="camera-error">
            {error}
          </p>
        )}

        {!cameraStarted ? (
          <button
            className="auth-button"
            onClick={startCamera}
          >
            Start Camera
          </button>
        ) : (
          <button
            className="auth-button"
            onClick={captureFace}
          >
            Verify Face
          </button>
        )}

        <Link
          to="/login"
          className="back-link"
        >
          ← Login with email instead
        </Link>

      </div>
    </div>
  );
}

export default FaceLogin;