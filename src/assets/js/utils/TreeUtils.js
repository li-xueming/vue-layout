const defaultProps = { id: 'id', children: 'children' }
class TreeNode {
  constructor (data, props = defaultProps, parent) {
    this.props = props
    this.data = data
    let children = Array.isArray(data[this.props.children]) ? data[this.props.children] : []
    this.children = children.map(child => this.resolve(child, parent))
    this.id = data[this.props.id]
    this.parent = parent || this
    this.isRoot = parent === null
    this.isLeaf = this.children.length === 0
  }

  resolve (data, parent) {
    return new TreeNode(data, this.props, parent)
  }

  find (condition = () => true) {
    if (condition.apply(this, this.data)) {
      return true
    } else {
      if (Array.isArray(this.children)) {
        for (const child of this.children) {
          if (child.find(condition)) {
            return child
          }
        }
      }
    }
    return false
  }

  getTreeNodePaths () {
    let paths = []
    let resolveParent = (node) => {
      if (!node.parent.isRoot) {
        paths.unshift(node.parent)
        resolveParent(node.parent)
      }
    }
    resolveParent(this)
    return paths
  }
}

class Tree {
  constructor (treeData, props = defaultProps) {
    this.treeData = this.resolve(treeData)
    this.props = props
  }

  resolve (data) {
    if (!Array.isArray(data)) {
      data = [data]
    }
    return data.map(node => {
      if (Array.isArray(node[this.props.children])) {
        this.resolve(node)
      }
      return new TreeNode(node, this.props)
    })
  }

  find (condition = () => true) {
    if (typeof condition !== 'function') {
      throw new Error('请传入条件函数')
    }
    if (Array.isArray(this.treeData)) {
      for (const node of this.treeData) {
        if (node.find(condition)) {
          return true
        }
        return false
      }
    }
  }
}

export default {
  Tree,
  TreeNode
}
