function CircularLinkedList() {

    let Node = function (element) {

        this.element = element;
        this.next = null;
    };

    let length = 0;
    let head = null;

    this.append = function (element) {

        let node = new Node(element),
            current;

        if (head === null) { //리스트가 비어있다면
            head = node;
        } else {

            current = head;

            while (current.next !== head) { //head가 나올때까지 순회
                current = current.next;
            }

            current.next = node; //원소를 마지막 노드에 연결
        }

        node.next = head; //추가한 노드를 head와 연결

        length++; //리스트 사이즈 업데이트
    };
    //임의의 위치에 원소 삽입
    this.insert = function (position, element) {

        //범위 외의 값인지 체크
        if (position >= 0 && position <= length) {

            let node = new Node(element),
                current = head,
                previous,
                index = 0;

            if (position === 0) { //첫 번째 위치에 노드 추가

                node.next = current;

                while (current.next !== head) { //head가 나올때까지 순회
                    current = current.next;
                }

                head = node;
                current.next = head;

            } else { //리스트 중간에 새 노드 추가
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;

                if (node.next === null) {
                    node.next = head;
                }
            }

            length++;

            return true;

        } else {
            return false;
        }
    };
    //위치를 기반으로 노드 삭제
    this.removeAt = function (position) {

        //범위 외의 값인지 체크
        if (position > -1 && position < length) {

            let current = head,
                previous,
                index = 0;

            //첫 번째 노드 삭제
            if (position === 0) {

                while (current.next !== head) {
                    current = current.next;
                }

                head = head.next;
                current.next = head;

            } else {

                while (index++ < position) {

                    previous = current;
                    current = current.next;
                }

                //이전 노드를 현재의 다음 노드와 연결
                previous.next = current.next;
            }

            length--;

            return current.element;

        } else {
            return null;
        }
    };

    this.remove = function (element) {

        let index = this.indexOf(element);
        return this.removeAt(index);
    };

    this.indexOf = function (element) {

        let current = head,
            index = -1;

        if (element == current.element) {//천 번째 노드라면
            return 0;
        }

        index++;

        //중간 노드 체크
        while (current.next !== head) {

            if (element == current.element) {
                return index;
            }

            current = current.next;
            index++;
        }

        //마지막 노드 체크
        if (element == current.element) {
            return index;
        }

        return -1; //노드 탐색 실패
    };

    this.isEmpty = function () {
        return length === 0;
    };

    this.size = function () {
        return length;
    };

    this.getHead = function () {
        return head;
    };

    this.toString = function () {

        let current = head,
            str = current.element;

        while (current.next !== head) {
            current = current.next;
            str += ', ' + current.element;
        }

        return str.toString();
    };

    this.print = function () {
        console.log(this.toString());
    };
}