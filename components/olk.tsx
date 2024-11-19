export default function Component() {
    return (
      <section className="py-16">
        <div className="mx-auto space-y-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-10">
        The first section and main header for placeholder
      </h2>
      <p className="text-center mb-8 sm:mb-12 text-gray-600 px-4 sm:px-0">
        LangFlow is designed to redefine the boundaries of AI development in
        experimentation and real-world scenarios.
      </p>
          <div className="grid md:grid-cols-6 gap-8">
            {/* Prompt Variables */}
            <div className="md:col-span-2 space-y-4">
              <div className="bg-[#111] rounded-xl overflow-hidden">
                <video
                  src="/1.webm?height=200&width=200"
                  autoPlay
                  muted
                  controls
                  className="w-full h-80 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Prompt Variables</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Dynamic inputs are introduced using curly brackets {}.
              </p>
            </div>
  
            {/* Fine-Tuning */}
            <div className="md:col-span-4 space-y-4">
              <div className="bg-[#111] rounded-xl overflow-hidden">
                <video
                  src="/2.webm?height=200&width=400"
                  autoPlay
                  muted
                  controls
                  className="w-full h-80 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Fine-Tuning</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Harness the full potential of LLMs by easily fine-tuning them from spreadsheets.
              </p>
            </div>
  
            {/* Group Components */}
            <div className="md:col-span-4 space-y-4">
              <div className="bg-[#111] rounded-xl overflow-hidden">
                <video
                  src="/3.webm?height=200&width=400"
                  autoPlay
                  muted
                  controls
                  className="w-full h-80 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Group Components</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Higher-level components naturally emerge from AI building blocks. Store and share your creations.
              </p>
            </div>
  
            {/* Custom Components */}
            <div className="md:col-span-2 space-y-4">
              <div className="bg-[#111] rounded-xl overflow-hidden">
                <video
                  src="/4.webm?height=200&width=200"
                  autoPlay
                  muted
                  controls
                  className="w-full h-80 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Custom Components</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Go beyond the surface and code your own components.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }