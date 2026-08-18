# 郑超作品集网站 · 源代码备份

备份日期：2026-08-18  
来源：`郑超-作品集网站-源代码.zip`  
内容：99 个文本源代码 / 配置文件，已无损打包为 `portfolio-source-code.tar.xz`，再以 Base64 分片保存。  
归档大小：122,896 bytes  
SHA-256：`b0d0878dc3228be34b7a0172ca9c98006b6e05296189ffe9b66f2ed1c8b86d8c`

> 说明：JPG / PNG 等二进制图片媒体资源不在本次“源代码快照”内。

## 恢复

按顺序拼接并解码：

```bash
cat portfolio-source-code.tar.xz.b64.part01 \
    portfolio-source-code.tar.xz.b64.part02 \
    portfolio-source-code.tar.xz.b64.part03 \
    portfolio-source-code.tar.xz.b64.part04 \
    portfolio-source-code.tar.xz.b64.part05 \
    portfolio-source-code.tar.xz.b64.part06 \
    portfolio-source-code.tar.xz.b64.part07 \
    portfolio-source-code.tar.xz.b64.part08-10 \
    portfolio-source-code.tar.xz.b64.part11-13 \
    portfolio-source-code.tar.xz.b64.part14-16 \
    portfolio-source-code.tar.xz.b64.part17-19 \
    portfolio-source-code.tar.xz.b64.part20-22 \
    portfolio-source-code.tar.xz.b64.part23-25 \
    portfolio-source-code.tar.xz.b64.part26-28 \
  | base64 -d > portfolio-source-code.tar.xz

tar -xJf portfolio-source-code.tar.xz
```

恢复后可用 SHA-256 校验完整性。