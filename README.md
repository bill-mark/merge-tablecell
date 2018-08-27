# merge-tablecell

一个合并单元格-列的插件

开发初衷:一些UI库也有这种功能,比如elemrntui,但是为了这么一个小功能下载一个UI库,不划算而且这个需求其他项目也有用到,就干脆做成插件了

用法:
1. npm install merge-tablecell --save

2. import mergetables from 'merge-tablecell'


3. mergetables(id,beginColumn,beginRow)
   如果你用的是mvvm框架,要在DOM更新后调用该插件,比如VUE中要在updated里调用
   参数依次是:表id,合并第几列,开会行(一般是1,因为0是表头)
   
ENGLISH:
A plug-in that combines cells and columns.

Development intent: Some UI libraries also have this feature, such as elemrntui, but in order to download a UI library for such a small function, it's not cost-effective and other projects are also useful, just make plug-ins

Usage:

1. NPM install merge-tablecell --save

2. import mergetables from'merge-tablecell'

3. mergetables(ID, beginColumn, beginRow)
If you use the MVVM framework, call the plug-in after updating DOM, such as calling in updated in VUE.
The parameters are as follows: table ID, merging columns, and meeting rows (usually 1, since 0 is the header).
