"use strict";
//测试数据2018年2月10日
var data = [
	{ id: 1, pid: 0 }, { id: 2, pid: 0 }, { id: 3, pid: 1 }, { id: 4, pid: 1 }, { id: 5, pid: 4 }, { id: 6, pid: 4 }
];


//生成Tree
function treeify(list, idAttr, parentAttr, childrenAttr) {
	if (!idAttr) { idAttr = 'id'; }
	if (!parentAttr) { parentAttr = 'parent'; }
	if (!childrenAttr) { childrenAttr = 'children'; }

	var treeList = [];
	var lookup = {};
	list.forEach(function (obj) {
		lookup[obj[idAttr]] = obj;
		obj[childrenAttr] = [];
	});
	list.forEach(function (obj) {
		if (obj[parentAttr] !== null) {
			if (lookup[obj[parentAttr]] === undefined) {

				treeList.push(lookup[obj[idAttr]]);
			}
			else {
				lookup[obj[parentAttr]][childrenAttr].push(obj);
			}
		} else {
			treeList.push(obj);
		}
	});
	return treeList;
    var treeList = [];
    var lookup = {};
    list.forEach(function (obj) {
        lookup[obj[idAttr]] = obj; 
        obj[childrenAttr] = [];
    });
    list.forEach(function (obj) { 
        if (obj[parentAttr] !== null) {
            if (lookup[obj[parentAttr]] === undefined) {
                
                treeList.push(lookup[obj[idAttr]]);
            } 
            else {
                lookup[obj[parentAttr]][childrenAttr].push(obj);
            }
        } else {
            treeList.push(obj);
        }
    });
    return treeList;
}

function calcChidrenNum(obj0, obj) {
	var ls1 = getChildren(obj0);
	if (ls1 !== null && ls1.length > 0) {
		for (var i = 0; i < ls1.length; i++) {
			calcChidrenNum(ls1[i], obj);
			if (ls1.length !== undefined) {
				obj[obj0.id] += ls1.length;
			}
		}

	} else {
		obj[obj0.id] = 0;
	}
}

function getChildren(obj) {
	var resultList = [];
	for (var i = 0; i < data.length; i++) {
		if (data[i].pid === obj.id) {
			resultList.push(data[i]);
		}
	}
	return resultList;
}

(function () {
	// var ls1 = { id: 0, pid: -1 };
	// var obj = {};
	// calcChidrenNum(ls1, obj);
	//	var result = treeify(data,"id","pid");
	var n = mcd(100, 35);
	//var n = test(100,35);
	console.log(n);
})();

function test(x,y){
	var result = 1;
	if(x>y){result = mcd1(x,y);}
	//else if(x===y){return y;}
	else{result = mcd1(y,x);}
	return result;
}

function mcd1(x,y){
	if(x%y===0){
		return y;
	}
	else{
		return mcd1(y,x%y);
	}
}


function mcd(x, y) {
	if (x > y) {
		if (x % y ===0) {
			return y;
		} else {
			return mcd(x % y, y);
		}
	}else if(x === y){
		return y;
	}else {
		if (y % x ===0) {
			return x;
		} else {
			return mcd(y % x, x);
		}
	}
}