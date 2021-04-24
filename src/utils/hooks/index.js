import { useEffect, useState } from "react"

const useVideoModal = () => {
  const [showModal, setShowModal] = useState(false)
  const [video, setVideo] = useState({
    vendor: ``,
    id: ``,
  })

  useEffect(() => {
    setShowModal(video.id.length ? true : false)
  }, [video])

  return [video, setVideo, showModal]
}

export { useVideoModal }
