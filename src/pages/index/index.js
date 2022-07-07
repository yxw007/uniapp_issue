/**
 * 创建日期: 2022-07-02
 * 文件名称：index.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：
 */

import { onMounted, ref, watch, watchEffect } from "vue";

/* 不含最大值，含最小值 */
export function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

export function getGoodsInfos(num = 6) {
	const ret = [];
	for (let i = 0; i < num; i++) {
		ret.push({
			id: i + 1,
			name: "轻奢风格 休闲舒适 休闲椅",
			price: 16900,
			image: "/static/logo.png",
			size: "700*700*760mm（单人位）",
			num: 1,
			select: false,
		});
	}
	return ret;
}

export function useTab() {
	const tabSelectIndex = ref(0);
	const tabDatas = ref(["全部", "待付款", "待收货", "待评价", "售后"]);
	const tabStyle = ref({
		selectedFontSize: 16,
		selectedFontColor: "#DE3926",
		isSelectedBold: false,
		itemGapSize: 70,
	});
	return { tabSelectIndex, tabDatas, tabStyle };
}

export function useRecord() {
	const records = ref([]);
	const allRecords = [];
	for (let type = 0; type < 5; type++) {
		const tmpRecords = [];
		const recordNum = getRandomInt(1, 5);
		allRecords.push(tmpRecords);
		for (let j = 0; j < recordNum; j++) {
			const goodsNum = getRandomInt(1, 4);
			const goodsInfos = getGoodsInfos(goodsNum);
			tmpRecords.push({
				id: "DJ20220518153659",
				status: getRandomInt(0, 3),
				totalPrice: 39140,
				goodsInfos,
			});
		}
	}

	console.log("allRecords:", allRecords);
	records.value = allRecords[0]

	return { records };
}

export function useStatusOptionStyle() {
	const statusStyles = [
		{
			background: "#ffffff",
			border: "2rpx solid #999999",
			color: "#333333",
		},
		{
			background: "linear-gradient(90deg,#ff8a57, #fc253f)",
			color: "#ffffff",
			border: "none",
		},
		{
			background: "#ffffff",
			border: "2rpx solid #DE3926",
			color: "#DE3926",
		},
	];

	const statusColors = ["#DE3926", "#2DBAA5", "#FF974B"];

	const statusOptions = [
		["取消订单", "立即付款"],
		["查看物流", "确认收货"],
		["申请收货", "立即评价"],
	];

	const statusNames = ["待付款", "待收货", "待评价"];

	function getStatusName(status) {
		return statusNames[status % statusNames.length];
	}

	function getStatusColor(status) {
		return statusColors[status % statusColors.length];
	}

	function getStatusStyle(status) {
		return statusStyles[status % statusStyles.length];
	}

	function getStatusOption(status) {
		return statusOptions[status % statusOptions.length];
	}

	return { getStatusName, getStatusColor, getStatusStyle, getStatusOption };
}
