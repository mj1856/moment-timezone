"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Swift_Current"] = {
	"1918" : helpers.makeTestYear("America/Swift_Current", [
		["1918-04-14T08:59:59+00:00", "01:59:59", "MST", 420],
		["1918-04-14T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1918-10-27T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1918-10-27T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1942" : helpers.makeTestYear("America/Swift_Current", [
		["1942-02-09T08:59:59+00:00", "01:59:59", "MST", 420],
		["1942-02-09T09:00:00+00:00", "03:00:00", "MWT", 360]
	]),

	"1945" : helpers.makeTestYear("America/Swift_Current", [
		["1945-08-14T22:59:59+00:00", "16:59:59", "MWT", 360],
		["1945-08-14T23:00:00+00:00", "17:00:00", "MPT", 360],
		["1945-09-30T07:59:59+00:00", "01:59:59", "MPT", 360],
		["1945-09-30T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1946" : helpers.makeTestYear("America/Swift_Current", [
		["1946-04-28T08:59:59+00:00", "01:59:59", "MST", 420],
		["1946-04-28T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1946-10-13T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1946-10-13T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1947" : helpers.makeTestYear("America/Swift_Current", [
		["1947-04-27T08:59:59+00:00", "01:59:59", "MST", 420],
		["1947-04-27T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1947-09-28T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1947-09-28T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1948" : helpers.makeTestYear("America/Swift_Current", [
		["1948-04-25T08:59:59+00:00", "01:59:59", "MST", 420],
		["1948-04-25T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1948-09-26T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1948-09-26T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1949" : helpers.makeTestYear("America/Swift_Current", [
		["1949-04-24T08:59:59+00:00", "01:59:59", "MST", 420],
		["1949-04-24T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1949-09-25T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1949-09-25T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1957" : helpers.makeTestYear("America/Swift_Current", [
		["1957-04-28T08:59:59+00:00", "01:59:59", "MST", 420],
		["1957-04-28T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1957-10-27T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1957-10-27T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1959" : helpers.makeTestYear("America/Swift_Current", [
		["1959-04-26T08:59:59+00:00", "01:59:59", "MST", 420],
		["1959-04-26T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1959-10-25T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1959-10-25T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1960" : helpers.makeTestYear("America/Swift_Current", [
		["1960-04-24T08:59:59+00:00", "01:59:59", "MST", 420],
		["1960-04-24T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1960-09-25T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1960-09-25T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1961" : helpers.makeTestYear("America/Swift_Current", [
		["1961-04-30T08:59:59+00:00", "01:59:59", "MST", 420],
		["1961-04-30T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1961-09-24T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1961-09-24T08:00:00+00:00", "01:00:00", "MST", 420]
	])
};