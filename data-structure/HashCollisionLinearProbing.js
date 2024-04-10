function HashCollisionLinearProbing() {

    let table = [];

    let ValuePair = function (key, value) {
        this.key = key;
        this.value = value;

        this.toString = function () {
            return '[' + this.key + ' - ' + this.value + ']';
        }
    };

    let loseloseHashCode = function (key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    };

    let hashCode = function (key) {
        return loseloseHashCode(key);
    };

    this.put = function (key, value) {
        let position = hashCode(key); //해시함수로 인덱스 찾기

        if (table[position] == undefined) { //인덱스에 원소 존재하지 않으면
            table[position] = new ValuePair(key, value); //해당 인덱스에 key, value 저장
        } else { //인덱스에 다른 원소가 존재하면
            let index = ++position;
            while (table[index] != undefined) { //비어있는 인덱스를 찾음
                index++;
            }
            table[index] = new ValuePair(key, value);
        }
    };

    this.get = function (key) {
        let position = hashCode(key);

        if (table[position] !== undefined) { //키의 존재 여부를 확인
            if (table[position].key === key) {
                return table[position].value;
            } else {
                let index = ++position;
                while (table[index] === undefined ||
                    table[index].key !== key) {
                    index++;
                }
                if (table[index].key === key) {
                    return table[index].value;
                }
            }
        }
        return undefined; //키가 존재하지 않으면 undefined 반환
    };

    this.remove = function (key) { //get 메소드와 동일 
        let position = hashCode(key);

        if (table[position] !== undefined) {
            if (table[position].key === key) {
                return table[position] = undefined;
            } else {
                let index = ++position;
                while (table[index] === undefined ||
                    table[index].key !== key) {
                    index++;
                }
                if (table[index].key === key) {
                    return table[index] = undefined;
                }
            }
        }
        return undefined;
    };

    this.print = function () {
        for (let i = 0; i < table.length; ++i) {
            if (table[i] !== undefined) {
                console.log(table[i].toString());
            }
        }
    };
}