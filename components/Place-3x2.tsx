import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function Place3x2() {
  return (
    <div className="w-full max-w-7xl mx-auto py-28 space-y-40">
      {/* Step 1 */}
      <div className="grid gap-16 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-semibold">
            Sourcing renewable energy
          </h2>
          <p className="text-gray-500 text-lg">
            Voltient can identify optimal data center locations for tech
            companies looking to balance power needs, sustainability, and
            cost-efficiency in their AI infrastructure expansion.{" "}
          </p>
        </div>
        <Card className="overflow-hidden relative bg-gray-900">
          <CardContent className="p-0">
            <Image
              src="/place-more.png?height=600&width=800"
              alt="Code editor preview"
              width={800}
              height={600}
              className="w-full object-cover"
            />
          </CardContent>
        </Card>
      </div>

      {/* Step 2 */}
      <div className="grid gap-16 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <Card className="overflow-hidden relative bg-gray-900">
            <CardContent className="p-0">
              <Image
                src="/place-more.png?height=600&width=800"
                alt="Code editor preview"
                width={800}
                height={600}
                className="w-full object-cover"
              />
            </CardContent>
          </Card>
        </div>
        <div className="space-y-4 order-1 md:order-2">
          <h2 className="text-3xl sm:text-4xl font-semibold">
            Decade-long climate change predictions
          </h2>
          <p className="text-gray-500 text-lg">
            Voltient helps providers quickly work with long-term projections for
            extreme weather, protecting data center infrastructure from future,
            climate-change-exacerbated events.
          </p>
        </div>
      </div>

      {/* Step 3 */}
      <div className="grid gap-16 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-semibold">
            Optimizing real estate for regulatory compliance
          </h2>
          <p className="text-gray-500 text-lg">
            Voltient combines real estate data with regulatory intelligence to
            identify cost-efficient land in business-friendly jurisdictions,
            enabling rapid deployment of edge data centers
          </p>
        </div>
        <Card className="overflow-hidden relative bg-gray-900">
          <CardContent className="p-0">
            <Image
              src="/place-more.png?height=600&width=800"
              alt="Code editor preview"
              width={800}
              height={600}
              className="w-full object-cover"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
