export default function Modal({ isOpen, onClose, title, image, content }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[85vh] flex flex-row overflow-hidden">

        {/* LEFT COLUMN - Image Panel */}
        <div className="w-[45%] flex-shrink-0 bg-black">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT COLUMN - Title + Text + Footer */}
        <div className="flex-1 flex flex-col overflow-hidden">

          {/* Header - Title + Close Button */}
          <div className="flex justify-between items-center px-6 pt-6 pb-4 border-b border-yap-border">
            <h2 className="font-serif text-2xl font-bold text-yap-text">
              {title || 'Writeup'}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ✕
            </button>
          </div>

          {/* Content - Scrollable, read-only text */}
          <div className="flex-1 overflow-y-auto p-6">
            <p className="font-serif text-sm leading-[1.9] text-yap-muted whitespace-pre-wrap">
              {content}
            </p>
          </div>

          {/* Footer - Close + Save Buttons */}
          <div className="p-6 border-t border-yap-border flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-lg text-yap-dark hover:bg-gray-50 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                // Save logic here
                onClose()
              }}
              className="px-6 py-2 bg-yap-yellow text-yap-dark rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
            >
              Save
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
