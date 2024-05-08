const RootLoading = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-900">
      <iframe
        title="Loading"
        src="https://giphy.com/embed/RgzryV9nRCMHPVVXPV"
        width={480}
        height={480}
        className="giphy-embed"
        allowFullScreen
      />
    </div>
  )
}

export default RootLoading
