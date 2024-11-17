class LinkedList {
	HEAD;
	constructor() {
		this.HEAD = null;
	}

	prepend(data) {
		let node = new Node();
		node.value = data;
		node.nextNode = this.HEAD;
		this.HEAD = node;
	}

	append(data) {
		let entry = new Node();
		entry.value = data;
		if (this.HEAD == null) {
			this.HEAD = entry;
		} else {
			let lastNode = this.EOL(this.HEAD);
			lastNode[0].nextNode = entry;
		}
	}

	size() {
		return this.EOL(this.HEAD)[1];
	}

	head() {
		return this.HEAD;
	}

	tail() {
		return this.EOL(this.HEAD)[0];
	}

	unshift() {
		let newhead = this.HEAD.nextNode;
		this.HEAD = newhead;
	}

	at(index) {
		let count = 0;
		let target = this.HEAD;
		while (count != index) {
			target = target.nextNode;
			count++
		}
		return target;
	}

	pop() {
		let penultimate = this.at(this.size() - 2); // substract by 2 because index = size -1 and we want node before the penultimate node
		penultimate.nextNode = null;
	}

	contains(value) {
		let maybeTarget = this.HEAD;
		while (true) {
			if (maybeTarget.value == value) {
				return true;
			}
			if (maybeTarget.nextNode == null) {
				return false;
			}
			maybeTarget = maybeTarget.nextNode;
		}
	}

	find(value) {
		let target = this.HEAD;
		let count = 0;

		while (true) {
			if (target.value == value) {
				return count;
			}
			if (target.nextNode == null) {
				return -1;
			}

			count++;
			target = target.nextNode;
		}
	}

	toString() {
		let output = "list is empty";
		if (this.HEAD == null) {
			console.log(output);
			return false;
		}
		output = "";
		let target = this.head();
		let isRunning = true;
		while (isRunning) {
			let val = target.value;
			output += "( " + val + " ) ";
			if (target.nextNode == null)
				isRunning = false;
			else {
				output += " -> ";
				target = target.nextNode;
			}
		}
		console.log(output)
	}

	insertAt(data, index) {
		let previousNode = this.at(index - 1);
		let oldNextNode = previousNode.nextNode;
		let newNextNode = new Node();
		newNextNode.value = data;
		newNextNode.nextNode = oldNextNode;
		previousNode.nextNode = newNextNode;
	}

	removeAt(index) {
		let previousNode = this.at(index - 1);
		let removedNode = previousNode.nextNode;
		let afterNode = removedNode.nextNode;
		previousNode.nextNode = afterNode;
	}

	EOL(node, size = 1) {
		if (node.nextNode == null) {
			return [node, size];
		} else {
			node = this.EOL(node.nextNode, size + 1);
		}
		return node;
	}
}




class Node {
	nextNode;
	value;
	constructor() {
		this.nextNode = null;
		this.value = null;
	}

	set value(val) {
		this.value = val;
	}

	set nextNode(node) {
		this.nextNode = node;
	}

}


export { LinkedList };
