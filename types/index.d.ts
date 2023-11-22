import Vue from 'vue'

interface PluginsInjections {
  $db: any
  $auth: any
  $storage: any
  $login: any
  $firestore: any
  BarcodeDetector: any
  webkitSpeechRewcognition: any
  navigateTo: any
  formatter: any
  DateFormatter: any
}

declare global {
  interface Window {
    webkitSpeechRecognition: any
  }
}

declare module '#app' {
  interface NuxtApp extends PluginsInjections {}
}

declare module '#app' {
  interface NuxtApp extends PluginsInjections {}
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties extends PluginsInjections {}
}
