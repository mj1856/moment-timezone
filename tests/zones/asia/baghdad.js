"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Baghdad"] = {
	"1917" : helpers.makeTestYear("Asia/Baghdad", [
		["1917-12-31T21:02:23+00:00", "23:59:59", "BMT", -10656 / 60],
		["1917-12-31T21:02:24+00:00", "00:02:24", "AST", -180]
	]),

	"1982" : helpers.makeTestYear("Asia/Baghdad", [
		["1982-04-30T20:59:59+00:00", "23:59:59", "AST", -180],
		["1982-04-30T21:00:00+00:00", "01:00:00", "ADT", -240],
		["1982-09-30T19:59:59+00:00", "23:59:59", "ADT", -240],
		["1982-09-30T20:00:00+00:00", "23:00:00", "AST", -180]
	]),

	"1983" : helpers.makeTestYear("Asia/Baghdad", [
		["1983-03-30T20:59:59+00:00", "23:59:59", "AST", -180],
		["1983-03-30T21:00:00+00:00", "01:00:00", "ADT", -240],
		["1983-09-30T19:59:59+00:00", "23:59:59", "ADT", -240],
		["1983-09-30T20:00:00+00:00", "23:00:00", "AST", -180]
	]),

	"1984" : helpers.makeTestYear("Asia/Baghdad", [
		["1984-03-31T20:59:59+00:00", "23:59:59", "AST", -180],
		["1984-03-31T21:00:00+00:00", "01:00:00", "ADT", -240],
		["1984-09-30T19:59:59+00:00", "23:59:59", "ADT", -240],
		["1984-09-30T20:00:00+00:00", "23:00:00", "AST", -180]
	]),

	"1985" : helpers.makeTestYear("Asia/Baghdad", [
		["1985-03-31T20:59:59+00:00", "23:59:59", "AST", -180],
		["1985-03-31T21:00:00+00:00", "01:00:00", "ADT", -240],
		["1985-09-28T21:59:59+00:00", "01:59:59", "ADT", -240],
		["1985-09-28T22:00:00+00:00", "01:00:00", "AST", -180]
	]),

	"1986" : helpers.makeTestYear("Asia/Baghdad", [
		["1986-03-29T21:59:59+00:00", "00:59:59", "AST", -180],
		["1986-03-29T22:00:00+00:00", "02:00:00", "ADT", -240],
		["1986-09-27T21:59:59+00:00", "01:59:59", "ADT", -240],
		["1986-09-27T22:00:00+00:00", "01:00:00", "AST", -180]
	]),

	"1987" : helpers.makeTestYear("Asia/Baghdad", [
		["1987-03-28T21:59:59+00:00", "00:59:59", "AST", -180],
		["1987-03-28T22:00:00+00:00", "02:00:00", "ADT", -240],
		["1987-09-26T21:59:59+00:00", "01:59:59", "ADT", -240],
		["1987-09-26T22:00:00+00:00", "01:00:00", "AST", -180]
	]),

	"1988" : helpers.makeTestYear("Asia/Baghdad", [
		["1988-03-26T21:59:59+00:00", "00:59:59", "AST", -180],
		["1988-03-26T22:00:00+00:00", "02:00:00", "ADT", -240],
		["1988-09-24T21:59:59+00:00", "01:59:59", "ADT", -240],
		["1988-09-24T22:00:00+00:00", "01:00:00", "AST", -180]
	]),

	"1989" : helpers.makeTestYear("Asia/Baghdad", [
		["1989-03-25T21:59:59+00:00", "00:59:59", "AST", -180],
		["1989-03-25T22:00:00+00:00", "02:00:00", "ADT", -240],
		["1989-09-23T21:59:59+00:00", "01:59:59", "ADT", -240],
		["1989-09-23T22:00:00+00:00", "01:00:00", "AST", -180]
	]),

	"1990" : helpers.makeTestYear("Asia/Baghdad", [
		["1990-03-24T21:59:59+00:00", "00:59:59", "AST", -180],
		["1990-03-24T22:00:00+00:00", "02:00:00", "ADT", -240],
		["1990-09-29T21:59:59+00:00", "01:59:59", "ADT", -240],
		["1990-09-29T22:00:00+00:00", "01:00:00", "AST", -180]
	]),

	"1991" : helpers.makeTestYear("Asia/Baghdad", [
		["1991-03-31T23:59:59+00:00", "02:59:59", "AST", -180],
		["1991-04-01T00:00:00+00:00", "04:00:00", "ADT", -240],
		["1991-09-30T23:59:59+00:00", "03:59:59", "ADT", -240],
		["1991-10-01T00:00:00+00:00", "03:00:00", "AST", -180]
	]),

	"1992" : helpers.makeTestYear("Asia/Baghdad", [
		["1992-03-31T23:59:59+00:00", "02:59:59", "AST", -180],
		["1992-04-01T00:00:00+00:00", "04:00:00", "ADT", -240],
		["1992-09-30T23:59:59+00:00", "03:59:59", "ADT", -240],
		["1992-10-01T00:00:00+00:00", "03:00:00", "AST", -180]
	]),

	"1993" : helpers.makeTestYear("Asia/Baghdad", [
		["1993-03-31T23:59:59+00:00", "02:59:59", "AST", -180],
		["1993-04-01T00:00:00+00:00", "04:00:00", "ADT", -240],
		["1993-09-30T23:59:59+00:00", "03:59:59", "ADT", -240],
		["1993-10-01T00:00:00+00:00", "03:00:00", "AST", -180]
	]),

	"1994" : helpers.makeTestYear("Asia/Baghdad", [
		["1994-03-31T23:59:59+00:00", "02:59:59", "AST", -180],
		["1994-04-01T00:00:00+00:00", "04:00:00", "ADT", -240],
		["1994-09-30T23:59:59+00:00", "03:59:59", "ADT", -240],
		["1994-10-01T00:00:00+00:00", "03:00:00", "AST", -180]
	]),

	"1995" : helpers.makeTestYear("Asia/Baghdad", [
		["1995-03-31T23:59:59+00:00", "02:59:59", "AST", -180],
		["1995-04-01T00:00:00+00:00", "04:00:00", "ADT", -240],
		["1995-09-30T23:59:59+00:00", "03:59:59", "ADT", -240],
		["1995-10-01T00:00:00+00:00", "03:00:00", "AST", -180]
	]),

	"1996" : helpers.makeTestYear("Asia/Baghdad", [
		["1996-03-31T23:59:59+00:00", "02:59:59", "AST", -180],
		["1996-04-01T00:00:00+00:00", "04:00:00", "ADT", -240],
		["1996-09-30T23:59:59+00:00", "03:59:59", "ADT", -240],
		["1996-10-01T00:00:00+00:00", "03:00:00", "AST", -180]
	]),

	"1997" : helpers.makeTestYear("Asia/Baghdad", [
		["1997-03-31T23:59:59+00:00", "02:59:59", "AST", -180],
		["1997-04-01T00:00:00+00:00", "04:00:00", "ADT", -240],
		["1997-09-30T23:59:59+00:00", "03:59:59", "ADT", -240],
		["1997-10-01T00:00:00+00:00", "03:00:00", "AST", -180]
	]),

	"1998" : helpers.makeTestYear("Asia/Baghdad", [
		["1998-03-31T23:59:59+00:00", "02:59:59", "AST", -180],
		["1998-04-01T00:00:00+00:00", "04:00:00", "ADT", -240],
		["1998-09-30T23:59:59+00:00", "03:59:59", "ADT", -240],
		["1998-10-01T00:00:00+00:00", "03:00:00", "AST", -180]
	]),

	"1999" : helpers.makeTestYear("Asia/Baghdad", [
		["1999-03-31T23:59:59+00:00", "02:59:59", "AST", -180],
		["1999-04-01T00:00:00+00:00", "04:00:00", "ADT", -240],
		["1999-09-30T23:59:59+00:00", "03:59:59", "ADT", -240],
		["1999-10-01T00:00:00+00:00", "03:00:00", "AST", -180]
	]),

	"2000" : helpers.makeTestYear("Asia/Baghdad", [
		["2000-03-31T23:59:59+00:00", "02:59:59", "AST", -180],
		["2000-04-01T00:00:00+00:00", "04:00:00", "ADT", -240],
		["2000-09-30T23:59:59+00:00", "03:59:59", "ADT", -240],
		["2000-10-01T00:00:00+00:00", "03:00:00", "AST", -180]
	]),

	"2001" : helpers.makeTestYear("Asia/Baghdad", [
		["2001-03-31T23:59:59+00:00", "02:59:59", "AST", -180],
		["2001-04-01T00:00:00+00:00", "04:00:00", "ADT", -240],
		["2001-09-30T23:59:59+00:00", "03:59:59", "ADT", -240],
		["2001-10-01T00:00:00+00:00", "03:00:00", "AST", -180]
	]),

	"2002" : helpers.makeTestYear("Asia/Baghdad", [
		["2002-03-31T23:59:59+00:00", "02:59:59", "AST", -180],
		["2002-04-01T00:00:00+00:00", "04:00:00", "ADT", -240],
		["2002-09-30T23:59:59+00:00", "03:59:59", "ADT", -240],
		["2002-10-01T00:00:00+00:00", "03:00:00", "AST", -180]
	]),

	"2003" : helpers.makeTestYear("Asia/Baghdad", [
		["2003-03-31T23:59:59+00:00", "02:59:59", "AST", -180],
		["2003-04-01T00:00:00+00:00", "04:00:00", "ADT", -240],
		["2003-09-30T23:59:59+00:00", "03:59:59", "ADT", -240],
		["2003-10-01T00:00:00+00:00", "03:00:00", "AST", -180]
	]),

	"2004" : helpers.makeTestYear("Asia/Baghdad", [
		["2004-03-31T23:59:59+00:00", "02:59:59", "AST", -180],
		["2004-04-01T00:00:00+00:00", "04:00:00", "ADT", -240],
		["2004-09-30T23:59:59+00:00", "03:59:59", "ADT", -240],
		["2004-10-01T00:00:00+00:00", "03:00:00", "AST", -180]
	]),

	"2005" : helpers.makeTestYear("Asia/Baghdad", [
		["2005-03-31T23:59:59+00:00", "02:59:59", "AST", -180],
		["2005-04-01T00:00:00+00:00", "04:00:00", "ADT", -240],
		["2005-09-30T23:59:59+00:00", "03:59:59", "ADT", -240],
		["2005-10-01T00:00:00+00:00", "03:00:00", "AST", -180]
	]),

	"2006" : helpers.makeTestYear("Asia/Baghdad", [
		["2006-03-31T23:59:59+00:00", "02:59:59", "AST", -180],
		["2006-04-01T00:00:00+00:00", "04:00:00", "ADT", -240],
		["2006-09-30T23:59:59+00:00", "03:59:59", "ADT", -240],
		["2006-10-01T00:00:00+00:00", "03:00:00", "AST", -180]
	]),

	"2007" : helpers.makeTestYear("Asia/Baghdad", [
		["2007-03-31T23:59:59+00:00", "02:59:59", "AST", -180],
		["2007-04-01T00:00:00+00:00", "04:00:00", "ADT", -240]
	])
};