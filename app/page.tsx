"use client";

import tigerFactory, {
  ContextDeferredAuthProvider,
  redirectToTigerAuthentication,
} from "@gooddata/sdk-backend-tiger";
import { BackendProvider, WorkspaceProvider } from "@gooddata/sdk-ui-all";
import { BarChart } from "@gooddata/sdk-ui-charts";
import {DateDatasets, ReturnUnitCost } from "./gooddata-export";

const backend = tigerFactory()
  .onHostname("<your-gooddata-host>")
  .withAuthentication(
    new ContextDeferredAuthProvider(redirectToTigerAuthentication)
  );

export default function Home() {
  const measures = [ReturnUnitCost.Sum];
  const attributes = [DateDatasets.CustomerCreatedDate.CustomerCreatedDateQuarterOfYear.Default];
  
  return (
    <BackendProvider backend={backend}>
      <WorkspaceProvider workspace="<your-workspace-id>">
        <div className="w-full h-full flex flex-col items-center">
          <h1 className="my-10 text-2xl underline">GoodData with Next.js</h1>

          <div className="w-1/2 h-1/2">
            <BarChart
              measures={measures}
              viewBy={attributes}
            />
          </div>
        </div>
      </WorkspaceProvider>
    </BackendProvider>
  );
}
