import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import cytoscape, { ElementDefinition, Stylesheet } from 'cytoscape';

import { LANGUAGES, CONVERSIONS, Language, Conversion } from './data';

const GRAPH_STYLE: Stylesheet[] = [
  {
    selector: 'node',
    style: {
      height: 50,
      width: 50,
      label: 'data(id)',
      'text-wrap': 'wrap',
    }
  },

  {
    selector: 'edge',
    style: {
      'curve-style': 'bezier',
      'target-arrow-shape': 'triangle'
    }
  }
];

const makeLanguageGraph = () => {
  const filteredLanguages = Object.keys(LANGUAGES).filter(name =>
    CONVERSIONS.find(conversion => conversion.source === name || conversion.target === name));
  const nodes: ElementDefinition[] = filteredLanguages.map(name => ({
    group: 'nodes',
    data: {id: name}
  }));
  const edges: ElementDefinition[] = CONVERSIONS.map(conversion => ({
    group: 'edges',
    data: {
      id: `${conversion.source}_${conversion.target}`,
      source: conversion.source,
      target: conversion.target,
      conversion
    }
  }));
  return [...nodes, ...edges];
};

@Component({
  selector: 'app-conversion-graph',
  templateUrl: './language-graph.component.html',
  styleUrls: ['./language-graph.component.scss']
})
export class LanguageGraphComponent implements AfterViewInit {
  @ViewChild('container')
  container: ElementRef;

  graph: cytoscape.Core;
  // Nodes that have been pruned due to not being relevant for now
  hiddenNodes: cytoscape.NodeCollection | null = null;

  // User-selected elements - mutually exclusive
  selectedEdge: cytoscape.EdgeSingular | null = null;
  selectedNode: cytoscape.NodeSingular | null = null;

  get selectedLanguage(): Language | null {
    return this.selectedNode ? LANGUAGES[this.selectedNode.data('id')] : null;
  }

  get selectedConversion(): Conversion | null {
    return this.selectedEdge?.data('conversion') || null;
  }

  constructor() {
  }

  ngAfterViewInit(): void {
    this.render();
  }

  render(): void {
    this.graph = cytoscape({
      container: this.container.nativeElement,
      layout: {
        name: 'circle'
      },
      style: GRAPH_STYLE,
      elements: makeLanguageGraph(),
    });
    this.graph.on('select', () => this.filterToSelected());
    this.graph.on('unselect', () => this.resetFilter());
  }

  private filterToSelected(): void {
    this.resetFilter();

    const nodes = this.graph.nodes().toArray();
    const edges = this.graph.edges().toArray();

    const selected = nodes.filter(node => node.selected());
    if (selected.length === 0) {
      // Only consider selected edges if we have no selected nodes
      const selectedEdges = edges.filter(edge => edge.selected());
      this.selectedEdge = selectedEdges ? selectedEdges[0] : null;
      return;
    }

    this.selectedNode = selected[0];

    // Remove all languages that are not connected to a selected one
    const toRemove = this.graph.nodes().filter(ele => selected.indexOf(ele) === -1 && !edges.find(edge =>
      (ele === edge.source() || ele === edge.target()) &&
      (selected.indexOf(edge.source()) !== -1 || selected.indexOf(edge.target()) !== -1)
    ));
    this.hiddenNodes = toRemove.remove();
  }

  private resetFilter(): void {
    if (this.hiddenNodes) {
      this.hiddenNodes.restore();
      this.hiddenNodes = null;
    }
    this.selectedEdge = null;
    this.selectedNode = null;
  }
}
