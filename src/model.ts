const localStorageKeyName = 'recordList';//声明一个常量，不让它被随便改
const model = {//声明model对象
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    clone(data: RecordItem[] | RecordItem){//给我一个数据，然后我返回JSON字符串，然后再把它重新变成对象
        return JSON.parse(JSON.stringify(data));
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    fetch() {//获取数据
        return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    save(data: RecordItem[]) {//保存数据
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
    }
};

export {model};//导出