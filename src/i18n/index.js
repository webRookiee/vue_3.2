import { createI18n } from 'vue-i18n'
import EN from './en.js'
import ZH from './zh.js'
const messages = {
  en: {
    ...EN
    },
  zh: {
    ...ZH
  }
}
const getCurrentLanguage = () => {
  const UAlang = navigator.language // zh-CN
  console.log(UAlang.indexOf('zh'))
  const langCode = UAlang.indexOf('zh') !== -1 ? 'zh' : 'en'
  localStorage.setItem('lang', langCode)
  return langCode
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: getCurrentLanguage() || 'zh',
  messages: messages
})

export default i18n
