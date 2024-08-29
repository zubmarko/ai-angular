import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';

interface TreeNode {
  title: string;
  children?: TreeNode[];
  collapsed?: boolean;
}

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnChanges {
  @Input() categories: TreeNode[] = [];

  treeControl = new NestedTreeControl<TreeNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<TreeNode>();

  constructor() {
    // Initialize dataSource with categories
    this.dataSource.data = this.categories;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['categories']) {
      this.dataSource.data = this.categories;
    }
  }

  hasChild = (_: number, node: TreeNode) => !!node.children && node.children.length > 0;

  toggleNode(node: TreeNode): void {
    node.collapsed = !node.collapsed;
    this.dataSource.data = [...this.categories]; // Trigger change detection
  }
}
