# スーパー地元天気予報(仮)

メニューから選択する固定地点の地理情報をOpenWeatherAPIに渡して結果を表示する

## modules

- svelte
- tailwindcss
- daisyui
- dayjs
- dotenv
- wrangler

## tools

### mockサーバの起動

```zsh
yarn run json-server --watch .sample/mock.json
```

### ローカルで実行

```zsh
yarn dev
```

デフォルトはhttp://localhost:5173

### unit testの実行

```zsh
yarn vitest
```

workersのテストの場合はそれぞれのルートディレクトリに移動してvitestする

### workersのローカル実行

各workersのディレクトリに移動して下記を実行する

```zsh
wrangler dev --local
```

### サイトのbuild

`weather-forcast`直下でコマンドを実行する

```zsh
yarn build
```

`./dist`下にビルドされたリソースが作成される

## issues

### workers

- 天気予報の機能を追加する
- corsのoriginをenvで切り替えられるようにする

### svelte

- localと本番のworkersエンドポイントをenvとかで切り替えられるようにする
- 天気予報表示の機能を追加する
