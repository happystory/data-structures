class myArray {
  /**
   * 构造函数，传入数组容量capacity构造Array
   * @param {Number} capacity
   */
  constructor(capacity = 10) {
    this.data = new Array(capacity);
    this.size = 0;
  }

  // 获取数组中的元素个数
  getSize() {
    return this.size;
  }

  // 获取数组中的元素个数
  getCapacity() {
    return this.data.length;
  }

  // 返回数组是否为空
  isEmpty() {
    return this.size === 0;
  }

  // 向所有元素后添加一个新元素
  addLast(e) {
    this.add(this.size, e);
  }

  // 向所有元素前添加一个新元素
  addFirst(e) {
    this.add(0, e);
  }

  // 在第index个位置插入一个新元素e
  add(index, e) {
    if (this.size === this.data.length) {
      throw new Error('AddLast Failed. Array is full.');
    }
    if (index < 0 || index > this.size) {
      throw new Error('AddLast Failed. Require index >=0 and index <= size.');
    }

    for (let i = this.size - 1; i >= index; i--) {
      this.data[i + 1] = this.data[i];
    }
    this.data[index] = e;
    this.size++;
  }

  // 获取index索引位置的元素
  get(index) {
    if (index < 0 || index >= this.size) {
      throw new Error('Get Failed. Index is illegal.');
    }
    return this.data[index];
  }

  // 修改index索引位置的元素
  set(index, e) {
    if (index < 0 || index >= this.size) {
      throw new Error('Get Failed. Index is illegal.');
    }
    this.data[index] = e;
  }

  // 查找数组中是否有元素e
  contains(e) {
    for (let i = 0; i < this.size; i++) {
      if (this.data[i] === e) {
        return true;
      }
    }
    return false;
  }

  // 查找数组中元素e所在的索引，如果不存在元素e，则返回-1
  find(e) {
    for (let i = 0; i < this.size; i++) {
      if (this.data[i] === e) {
        return i;
      }
    }
    return -1;
  }

  // 从数组中删除index位置的元素，返回删除的元素
  remove(index) {
    if (index < 0 || index >= this.size) {
      throw new Error('Get Failed. Index is illegal.');
    }
    const ret = this.data[index];

    for (let i = index + 1; i < this.size; i++) {
      this.data[i - 1] = this.data[i];
    }
    this.size--;

    // 清除末位引用
    this.data[this.size] = undefined;
    return ret;
  }

  // 从数组中删除第一个元素，返回删除的元素
  removeFirst() {
    return this.remove(0);
  }

  // 从数组中删除最后一个元素，返回删除的元素
  removeLast() {
    return this.remove(this.size - 1);
  }

  // 从数组中删除元素e
  removeElement(e) {
    const index = this.find(e);
    if (index !== -1) {
      this.remove(index);
    }
  }

  // 便于打印查看
  toString() {
    let res = '';
    res += `Array: size = ${this.size}, capacity = ${this.data.length}\n`;
    res += '[';
    for (let i = 0; i < this.size; i++) {
      res += this.data[i];
      if (i !== this.size - 1) {
        res += ', ';
      }
    }
    res += ']';
    return res;
  }
}

module.exports = myArray;
