import React, { useContext } from "react"
import Modal from "react-modal"
import ReactPlayer from "react-player"
import PropTypes from "prop-types"
import Close from "~icons/close.svg"
import { VideoModalContext } from "~utils/context"

Modal.setAppElement("#___gatsby")

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    border: 0,
    width: "calc(100% - 2rem)",
    maxWidth: "1020px",
  },
  overlay: {
    background: "rgba(0,0,0,0.9)",
    zIndex: 30,
  },
}

const resetVideo = () => ({
  vendor: ``,
  id: ``,
})

const VideoModal = () => {
  const { video, setVideo, showModal } = useContext(VideoModalContext)

  const videoUrl =
    video.vendor === "vimeo"
      ? `https://vimeo.com/${video.id}`
      : `https://www.youtube.com/watch?v=${video.id}`

  return (
    <>
      {showModal && (
        <button
          className="fixed top-0 p-4 text-white right-0 z-40"
          onClick={() => setVideo(resetVideo())}
        >
          <Close />
        </button>
      )}
      <Modal
        isOpen={showModal}
        closeTimeoutMS={300}
        onRequestClose={() => setVideo(resetVideo())}
        style={customStyles}
      >
        <div className="aspect-ratio">
          <ReactPlayer
            url={videoUrl}
            playing
            controls
            width="100%"
            height="100%"
          />
        </div>
      </Modal>
    </>
  )
}

VideoModal.defaultProps = {
  isOpen: false,
  videoUrl: ``,
}

VideoModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  videoUrl: PropTypes.string.isRequired,
}

export default VideoModal
