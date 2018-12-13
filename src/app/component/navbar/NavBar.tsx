import * as React from 'react';
import { INavSelectionArg, INavTheme, Nav, SideNav } from 'react-sidenav';
import './NavBar.css';

const theme: INavTheme = {
  selectionColor: '#ff6f61',
  hoverBgColor: '#f5f5f5',
  selectionBgColor: '#f5f5f5'
};
export default class NavBar extends React.Component<unknown> {
  public state = {
    selectedPath: '1'
  };

  constructor(props: unknown) {
    super(props);
    this.onItemSelection = this.onItemSelection.bind(this);
  }

  public onItemSelection(arg: INavSelectionArg) {
    this.setState({ selectedPath: arg.path });
  }
  public render() {
    return (
      <div className="navi-layout">
        <SideNav
          onItemSelection={this.onItemSelection}
          defaultSelectedPath="macro"
          theme={theme}
        >
          <Nav id="select">Open</Nav>
          <Nav id="macro">Macro</Nav>
          <Nav id="project">Project</Nav>
          <Nav id="source">Source</Nav>
          <Nav id="action">Action</Nav>
        </SideNav>
      </div>
    );
  }
}
