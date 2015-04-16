"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Pontianak"] = {
	"1932" : helpers.makeTestYear("Asia/Pontianak", [
		["1932-10-31T16:42:39+00:00", "23:59:59", "PMT", -26240 / 60],
		["1932-10-31T16:42:40+00:00", "00:12:40", "WIB", -450]
	]),

	"1942" : helpers.makeTestYear("Asia/Pontianak", [
		["1942-01-28T16:29:59+00:00", "23:59:59", "WIB", -450],
		["1942-01-28T16:30:00+00:00", "01:30:00", "JST", -540]
	]),

	"1945" : helpers.makeTestYear("Asia/Pontianak", [
		["1945-09-22T14:59:59+00:00", "23:59:59", "JST", -540],
		["1945-09-22T15:00:00+00:00", "22:30:00", "WIB", -450]
	]),

	"1948" : helpers.makeTestYear("Asia/Pontianak", [
		["1948-04-30T16:29:59+00:00", "23:59:59", "WIB", -450],
		["1948-04-30T16:30:00+00:00", "00:30:00", "WIB", -480]
	]),

	"1950" : helpers.makeTestYear("Asia/Pontianak", [
		["1950-04-30T15:59:59+00:00", "23:59:59", "WIB", -480],
		["1950-04-30T16:00:00+00:00", "23:30:00", "WIB", -450]
	]),

	"1963" : helpers.makeTestYear("Asia/Pontianak", [
		["1963-12-31T16:29:59+00:00", "23:59:59", "WIB", -450],
		["1963-12-31T16:30:00+00:00", "00:30:00", "WITA", -480]
	])
};