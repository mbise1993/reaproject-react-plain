import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import TransformDialog from "./TransformDialog";
import { IRppData } from "../project/reaperProject";
import rppToElement from "../project/rppToElement";
import { readTestResource } from "../test/utilBrowser";
import AsyncLoader from "../test/AsyncLoader";

const loadTestRpps = async (names: string[]) => {
  const rppPromises = names.map(async name => {
    return {
      name: name,
      rootElement: await rppToElement(readTestResource(name)),
    } as IRppData;
  });

  return await Promise.all(rppPromises);
};

storiesOf("TransformDialog", module).add("with 1 transformed project", () => {
  const loadData = () => loadTestRpps(["OneEmptyTrack.rpp"]);

  return (
    <AsyncLoader loadData={loadData}>
      {data => <TransformDialog show={true} transformedRpps={data} onClose={action("on-close")} />}
    </AsyncLoader>
  );
});

storiesOf("TransformDialog", module).add("with multiple transformed project", () => {
  const loadData = () =>
    loadTestRpps(["EmptyProject.rpp", "OneEmptyTrack.rpp", "OneTrackWithMidiData.rpp", "OneTrackWithOneVst.rpp"]);

  return (
    <AsyncLoader loadData={loadData}>
      {data => <TransformDialog show={true} transformedRpps={data} onClose={action("on-close")} />}
    </AsyncLoader>
  );
});
