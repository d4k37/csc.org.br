import React from "react"
import { VideoModalContext } from "./../utils/context"
import { useVideoModal } from "./../utils/hooks"

const ContextWrapper = ({ children }) => {
  const [video, setVideo, showModal] = useVideoModal()

  return (
    <VideoModalContext.Provider value={{ video, setVideo, showModal }}>
      {children}
    </VideoModalContext.Provider>
  )
}

export default ContextWrapper
