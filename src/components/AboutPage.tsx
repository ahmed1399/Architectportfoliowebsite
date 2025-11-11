import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Portrait */}
          <div className="aspect-square overflow-hidden bg-white/5">
            <ImageWithFallback
              src="/tareef-portrait.jpg"
              alt="Tareef - Architect"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bio and Philosophy */}
          <div className="space-y-8 md:pt-8">
            <div className="space-y-4">
              <h1 className="text-header text-white">About</h1>
              <p className="text-body text-white/80 leading-relaxed">
                Tareef is an architect and designer based in the Middle East,
                specializing in contemporary residential and commercial
                architecture. With over a decade of experience, the practice
                focuses on creating spaces that balance timeless design
                principles with modern living needs.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-subheader text-[#d9c7a4]">Philosophy</h3>
              <p className="text-body text-white/80 leading-relaxed">
                Architecture should be a thoughtful response to context, climate,
                and human experience. Every project begins with careful listening
                and observation, seeking to understand the unique qualities of
                place and the aspirations of those who will inhabit the space.
              </p>
              <p className="text-body text-white/80 leading-relaxed">
                The work emphasizes clarity of form, honesty of materials, and
                the interplay of light and shadow. Through restraint and
                precision, each design aims to create environments that are both
                functional and contemplative — spaces that enhance daily life
                while standing the test of time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
