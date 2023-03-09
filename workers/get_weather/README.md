# devcontainer起動時の操作

- 各workersディレクトリ下で`yarn global add wrangler`を実行する
- `wrangler dev`でworkerを起動すると認証を求められる

```
Attempting to login via OAuth...
Opening a link in your default browser: https://dash.cloudflare.com/oauth2/auth?response_type=code&client_id=54d11594-84e4-41aa-b438-e81b8fa78ee7&redirect_uri=http%3A%2F%2Flocalhost%3A8976%2Foauth%2Fcallback&scope=account%3Aread%20user%3Aread%20workers%3Awrite%20workers_kv%3Awrite%20workers_routes%3Awrite%20workers_scripts%3Awrite%20workers_tail%3Aread%20d1%3Awrite%20pages%3Awrite%20zone%3Aread%20ssl_certs%3Awrite%20offline_access&state=REE0UFQ6DzKY2H8V9EU_wbxl8Qw11v3K&code_challenge=bEn3OTv7cyW2jiZxltYLTM5jYXRo7tPTXioKp-dWpTY&code_challenge_method=S256
▲ [WARNING] Failed to open
```

- 指示されたURLをブラウザで開くとcloudflareのログイン画面が開くのでログインする
- 連携の確認画面に遷移するので`Allow`をクリックする
- VSCodeに戻るとworkerが起動している(はず)

