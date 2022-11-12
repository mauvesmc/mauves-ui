import type { Component } from "solid-js";
/* @refresh reload */
import { render } from 'solid-js/web';

import { MauvesUi } from './MauvesUi'

const App: Component = () => {
  return (
    <>
      <p>MauvesUi</p>
      <MauvesUi />
    </>
  );
};

render(() => <App />, document.getElementById("root") as HTMLElement);
