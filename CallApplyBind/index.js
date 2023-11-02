
const runer = {
	name: "kingz",
	canRun: function (speed) {
		return `N${this.name} can run speed km ${speed}`;
	}
}

const fly = {
	name:"Nash",
	canfly: function (mph){
	return `${this.name} can fly speed mph ${mph}`;
	}
}

const runFun = runer.canRun
console.log(runFun(20))


