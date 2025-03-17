import { useState } from "react";

import ResourceCard from "@/components/card/resource";
import Header from "@/components/reusable/Header";
import { wellnessResources } from "@/data/resource";

export default function WellnessHubPage() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredResources = (
    activeTab === "all"
      ? wellnessResources
      : wellnessResources.filter(
          (resource) => resource.type.toLowerCase() === activeTab
        )
  ).sort(() => Math.random() - 0.5);

  return (
    <main role="main">
      <Header />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold mb-2">Wellness Hub</h1>
          <p className="text-gray-600 mb-8">
            Resources to support your mental health and well-being
          </p>

          <div className="mb-8">
            <div className="flex border-b">
              {["all", "video", "article", "podcast"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 font-medium text-sm ${
                    activeTab === tab
                      ? "border-b-2 border-blue-600 text-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <ResourceCard resource={resource} key={resource.id} />
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h3 className="text-lg font-semibold mb-2">No resources found</h3>
              <p className="text-gray-600">
                Try selecting a different category
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
