# Forex Margin Calculator Script
![Forex Margin Script Example](https://forexnew.org/Download/forex-margin-script.png)
- Lightweight plugin to automate Forex margin calculations.
- Use the jQuery AutoCalc plugin.
- See working example at [Forex Margin Calculator Page](https://forexnew.org/คลังความรู้/margin/#margin)

## Formula
- Margin = [Current Price x Lot Size x Contract Size] ÷ Leverage

## Browser Support
- Google Chrome
- Microsoft Edge
- Firefox
- Safari
- Opera
- Internet Explorer 9+

## Working Example

```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Forex Magin Calculator, Clean HTML & Javascript</title>
</head>

<style>
	.margin-table{margin:50px 0px 0px 0px}
	#cal{max-width:700px;margin:0 auto}
	#cal table{box-shadow:-1px 0px 9px 0px rgb(0 0 0 / 30%);border:1px solid #5eacea}
	#cal th{background-color:#f3f2f2}
	#cal td{background-color:#cee9ff;text-align:center}
	#cal td,#cal th{border:1px solid #74b3e6}
	#cal th,#cal input{font-size:16px;text-align:center}
	#cal input{width:100px;padding:5px 0px 5px 0px;background:none;border:none;margin-right:10px;outline:none}
	td.mm{border:3px solid #2196f3}
	input.margin{text-decoration:underline;font-weight:bold}	
</style>

<script type='text/javascript' src='https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js'></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jautocalc@1.4.1/dist/jautocalc.min.js"></script>
<script type="text/javascript">$(function(){$("form#cal").jAutoCalc("destroy"),$("form#cal tr.line_items").jAutoCalc({keyEventsFire:!0,decimalPlaces:2,emptyAsZero:!0}),$("form#cal").jAutoCalc({decimalPlaces:2})});</script>

<body>

<div class="margin-table">
<form id="cal"><table name="cal">
<tr>
	<th>Current Price</th>
	<th>Lots Size</th>
	<th>Contact Size</th>
	<th>Leverage</th>
	<th>Margin</th>
</tr>

<tr class="line_items">
	<td><input type="text" name="price" value="1.12345"></td>
	<td><input type="text" name="lot" value="1.00"></td>
	<td><input type="text" name="contact" value="100000"></td>
	<td><input type="text" name="leverage" value="500"></td>
	<td class="mm"><input type="text" class="margin" name="item_total" value="" jAutoCalc="{price} * {lot} * {contact} / {leverage}"></td>
</tr>
</table>
</form>
</div>

</body>
</html>
```
## Visit our website
- [ForexNew.org](https://forexnew.org/)
