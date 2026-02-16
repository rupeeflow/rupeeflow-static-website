import Image from "next/image"

export default function IntegrationPanels() {
  return (
    <section className="py-35">
      <div className="max-w-6xl mx-auto px-6">

        <Image
          src="/integration-panels.png"
          alt="Integration Platforms"
          width={1800}
          height={900}
          className="w-full "
          priority
        />

      </div>
    </section>
  )
}
