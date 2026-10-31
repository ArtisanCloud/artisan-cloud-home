<template>
  <article class="ac-page contact-page" :lang="lang">
    <header class="ac-wrap ac-hero contact-hero">
      <p class="ac-kicker">{{ c.kicker }}</p>
      <h1>{{ c.title }}</h1>
      <p class="ac-lead">{{ c.intro }}</p>
    </header>

    <section
      class="ac-wrap contact-start"
      aria-labelledby="contact-wechat-title"
    >
      <div class="contact-intro">
        <span class="contact-number" aria-hidden="true">01 /</span>
        <h2 id="contact-wechat-title">{{ c.wechat }}</h2>
        <p>{{ c.wechatIntro }}</p>
        <ol class="contact-instructions">
          <li>{{ c.scan }}</li>
          <li>{{ c.mobile }}</li>
          <li>{{ c.send }}</li>
        </ol>
        <p class="ac-note">{{ c.contactNote }}</p>
      </div>
      <figure class="contact-qr-card">
        <img
          src="/images/wx-qr-code.jpg"
          :alt="c.qrAlt"
          width="240"
          height="240"
          class="contact-qr"
        />
        <figcaption>{{ c.qrCaption }}</figcaption>
        <div class="contact-qr-actions">
          <a
            class="ac-link"
            href="/images/wx-qr-code.jpg"
            download="ArtisanCloud-WeChat.jpg"
            >{{ c.saveQr }} <span aria-hidden="true">↓</span></a
          >
          <a
            class="ac-link"
            href="/images/wx-qr-code.jpg"
            target="_blank"
            rel="noopener noreferrer"
            >{{ c.openQr }} <span aria-hidden="true">↗</span></a
          >
        </div>
      </figure>
    </section>

    <section
      id="inquiry-brief"
      class="contact-brief-section"
      aria-labelledby="contact-brief-title"
    >
      <div class="ac-wrap ac-section">
        <div class="contact-brief-heading">
          <div>
            <span class="contact-number" aria-hidden="true">02 /</span>
            <h2 id="contact-brief-title">{{ c.briefTitle }}</h2>
          </div>
          <p class="ac-lead">{{ c.briefIntro }}</p>
        </div>
        <p id="brief-privacy" class="contact-privacy">{{ c.privacy }}</p>
        <div class="contact-composer">
          <div
            class="contact-fields"
            role="group"
            :aria-label="c.fieldsLabel"
            aria-describedby="brief-privacy"
          >
            <div class="ac-field contact-field">
              <label for="brief-objective"
                >{{ c.objective }} <span>{{ c.optional }}</span></label
              ><textarea
                id="brief-objective"
                v-model="brief.objective"
                rows="3"
                maxlength="3000"
                :placeholder="c.objectiveHint"
              />
            </div>
            <div class="ac-field contact-field">
              <label for="brief-context"
                >{{ c.context }} <span>{{ c.optional }}</span></label
              ><textarea
                id="brief-context"
                v-model="brief.context"
                rows="3"
                maxlength="3000"
                :placeholder="c.contextHint"
              />
            </div>
            <div class="contact-short-fields">
              <div class="ac-field contact-field">
                <label for="brief-timeline"
                  >{{ c.timeline }} <span>{{ c.optional }}</span></label
                ><input
                  id="brief-timeline"
                  v-model="brief.timeline"
                  maxlength="300"
                  :placeholder="c.timelineHint"
                />
              </div>
              <div class="ac-field contact-field">
                <label for="brief-contact"
                  >{{ c.contact }} <span>{{ c.optional }}</span></label
                ><input
                  id="brief-contact"
                  v-model="brief.contact"
                  maxlength="300"
                  :placeholder="c.contactHint"
                  autocomplete="off"
                />
              </div>
            </div>
          </div>
          <div class="contact-preview-card">
            <div class="contact-preview-heading">
              <label for="brief-preview">{{ c.preview }}</label
              ><span>{{ c.unsent }}</span>
            </div>
            <textarea
              id="brief-preview"
              ref="previewElement"
              class="contact-preview"
              :value="preview"
              readonly
              rows="16"
              :aria-label="c.preview"
            />
            <div class="contact-brief-actions">
              <ElButton
                class="contact-copy-button"
                :disabled="!hasInput || copying"
                :loading="copying"
                @click="copyBrief"
                >{{ c.copy }}</ElButton
              >
              <ElButton
                class="contact-download-button"
                :disabled="!hasInput"
                @click="downloadBrief"
                >{{ c.download }}</ElButton
              >
            </div>
            <p class="contact-status" role="status" aria-live="polite">
              {{ status ? c[status] : c.handoff }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="ac-wrap ac-section contact-next">
      <div>
        <p class="ac-kicker">{{ c.nextKicker }}</p>
        <h2>{{ c.nextTitle }}</h2>
      </div>
      <div>
        <p>{{ c.nextText }}</p>
        <RouterLink class="ac-link" to="/services"
          >{{ c.services }} <span aria-hidden="true">→</span></RouterLink
        >
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, reactive, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { ElButton } from "element-plus";
import "element-plus/es/components/button/style/css";

const { locale } = useI18n();
const lang = computed(() => (locale.value === "en" ? "en" : "zh"));
const messages = {
  zh: {
    kicker: "一起把下一步想清楚",
    title: "从一个业务问题，\n开始聊聊。",
    intro:
      "无论是选择产品，还是规划一次系统改造，先告诉我们你想改善的工作环节。不必提前写好一份完整方案。",
    wechat: "通过微信联系",
    wechatIntro: "使用现有的微信联系入口，把你的场景和问题带给团队。",
    scan: "在电脑上浏览：使用微信「扫一扫」扫描右侧二维码。",
    mobile:
      "在手机上浏览：保存或打开二维码图片，再在微信「扫一扫」中选择相册识别。",
    send: "完成微信添加后，由你发送需求说明；网页不会代你发送消息。",
    contactNote:
      "如果手机浏览器未保存图片，可打开原图后长按保存。请在微信中核对联系人，再发送业务信息。",
    qrAlt: "ArtisanCloud 现有微信联系二维码",
    qrCaption: "微信联系入口",
    saveQr: "保存二维码",
    openQr: "打开原图",
    briefTitle: "先整理一份需求简报。",
    briefIntro:
      "几句话就够。把目标、现状与时间安排写下来，再复制到微信，或下载留存。",
    privacy:
      "这是本页的本地草稿工具，不是在线提交表单。内容不会由本页上传或持久保存，刷新或离开页面会丢失；复制、下载后请自行保管。请勿填写密码、密钥或敏感客户数据。",
    fieldsLabel: "需求简报草稿",
    objective: "想解决什么问题？",
    context: "目前怎么做？",
    timeline: "时间安排",
    contact: "如何称呼你 / 联系方式",
    optional: "选填",
    objectiveHint: "例如：让客户跟进不再依赖散落的聊天记录。",
    contextHint: "例如：使用哪些系统、由哪些团队参与、最想改善哪个环节。",
    timelineHint: "例如：希望先讨论范围，再安排试点。",
    contactHint: "仅填写你愿意分享的信息。",
    preview: "简报预览",
    unsent: "尚未发送",
    copy: "复制简报",
    download: "下载 TXT",
    handoff: "整理好后，请自行通过微信发送。此处不会产生收件回执或工单。",
    copied: "已复制到剪贴板，尚未发送。请切换到微信粘贴并确认发送。",
    copyFailed:
      "无法访问剪贴板。已选中简报，请手动复制，或下载 TXT；尚未发送。",
    downloaded: "已发起 TXT 文件下载，尚未发送。请确认浏览器保存结果。",
    documentTitle: "ArtisanCloud 需求简报",
    empty: "待沟通",
    nextKicker: "让需求有清晰的边界",
    nextTitle: "先对齐问题，\n再讨论交付。",
    nextText:
      "沟通时，可以一起明确使用人员、数据来源、现有系统、交付范围与验收方式。具体方案、周期和费用需要结合实际需求确认。",
    services: "了解服务与交付",
  },
  en: {
    kicker: "LET’S FIND THE NEXT STEP",
    title: "Start with a business\nquestion.",
    intro:
      "Choosing a product or planning a system change? Tell us which part of your work you want to improve. You do not need a finished specification to start a conversation.",
    wechat: "Connect on WeChat",
    wechatIntro:
      "Use our existing WeChat contact channel to share your situation and questions with the team.",
    scan: "On a computer: scan the QR code with WeChat Scan.",
    mobile:
      "On a phone: save or open the QR image, then select it from your album in WeChat Scan.",
    send: "After adding the contact in WeChat, send your brief yourself. This page does not send messages for you.",
    contactNote:
      "If your browser does not save the image, open the original and long-press to save it. Check the contact in WeChat before sharing business information.",
    qrAlt: "Existing ArtisanCloud WeChat contact QR code",
    qrCaption: "WeChat contact channel",
    saveQr: "Save QR image",
    openQr: "Open original",
    briefTitle: "Prepare a short inquiry brief.",
    briefIntro:
      "A few sentences are enough. Capture your goal, current setup and timing, then copy it into WeChat or download it for your records.",
    privacy:
      "This is a local draft tool, not an online submission form. This page does not upload or persist your text; refreshing or leaving the page clears it. Keep copied or downloaded files safe. Do not include passwords, keys or sensitive customer data.",
    fieldsLabel: "Inquiry brief draft",
    objective: "What would you like to improve?",
    context: "How does it work today?",
    timeline: "Timing",
    contact: "Name / contact preference",
    optional: "Optional",
    objectiveHint:
      "For example: make customer follow-ups less dependent on scattered chat records.",
    contextHint:
      "For example: existing systems, teams involved and the part of the workflow that needs attention.",
    timelineHint: "For example: define the scope first, then plan a pilot.",
    contactHint: "Only include information you want to share.",
    preview: "Brief preview",
    unsent: "Not sent",
    copy: "Copy brief",
    download: "Download TXT",
    handoff:
      "Send the finished brief through WeChat yourself. This tool does not create a receipt or support ticket.",
    copied:
      "Copied to your clipboard, not sent. Paste it into WeChat and confirm before sending.",
    copyFailed:
      "Clipboard access is unavailable. The brief is selected for manual copying, or you can download it. Nothing was sent.",
    downloaded:
      "TXT download requested, not sent. Check that your browser saved the file.",
    documentTitle: "ArtisanCloud inquiry brief",
    empty: "To discuss",
    nextKicker: "DEFINE THE SCOPE TOGETHER",
    nextTitle: "Understand the problem.\nThen plan the delivery.",
    nextText:
      "Discuss users, data sources, existing systems, delivery scope and acceptance criteria. The solution, schedule and pricing depend on your actual requirements.",
    services: "Explore services and delivery",
  },
};
const c = computed(() => messages[lang.value]);
const brief = reactive({
  objective: "",
  context: "",
  timeline: "",
  contact: "",
});
const hasInput = computed(() =>
  Object.values(brief).some((value) => value.trim().length > 0),
);
const preview = computed(() =>
  [
    c.value.documentTitle,
    "",
    ...(["objective", "context", "timeline", "contact"] as const).map(
      (key) => `${c.value[key]}\n${brief[key].trim() || c.value.empty}`,
    ),
  ].join("\n\n"),
);
const status = ref<"copied" | "copyFailed" | "downloaded" | null>(null);
const copying = ref(false);
const previewElement = ref<HTMLTextAreaElement | null>(null);
const downloadUrls = new Set<string>();
watch(
  [
    () => brief.objective,
    () => brief.context,
    () => brief.timeline,
    () => brief.contact,
    lang,
  ],
  () => {
    status.value = null;
  },
);

async function copyBrief() {
  if (!hasInput.value || copying.value) return;
  copying.value = true;
  try {
    const text = preview.value;
    await navigator.clipboard.writeText(text);
    status.value = text === preview.value ? "copied" : null;
  } catch {
    previewElement.value?.focus();
    previewElement.value?.select();
    status.value = "copyFailed";
  } finally {
    copying.value = false;
  }
}

function downloadBrief() {
  if (!hasInput.value) return;
  const url = URL.createObjectURL(
    new Blob(["\uFEFF", preview.value], { type: "text/plain;charset=utf-8" }),
  );
  downloadUrls.add(url);
  const link = document.createElement("a");
  link.href = url;
  link.download = `ArtisanCloud-inquiry-${lang.value}.txt`;
  link.click();
  status.value = "downloaded";
  setTimeout(() => {
    URL.revokeObjectURL(url);
    downloadUrls.delete(url);
  }, 1000);
}

onBeforeUnmount(() => {
  downloadUrls.forEach((url) => URL.revokeObjectURL(url));
});
</script>

<style scoped>
.contact-hero {
  padding-bottom: 54px;
}
.contact-hero h1,
.contact-next h2 {
  white-space: pre-line;
}
.contact-start {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 100px;
  align-items: center;
  padding-bottom: 95px;
}
.contact-number {
  display: block;
  font-size: 12px;
  color: #5f7168;
  letter-spacing: 0.09em;
  margin-bottom: 18px;
}
.contact-intro > p {
  max-width: 540px;
}
.contact-instructions {
  padding-left: 20px;
  margin: 28px 0;
  color: #536b60;
}
.contact-instructions li {
  line-height: 1.9;
  font-size: 14px;
  padding-left: 6px;
  margin-bottom: 14px;
}
.contact-qr-card {
  margin: 0;
  padding: 34px;
  border: 1px solid #e2eae5;
  background: linear-gradient(135deg, #f5f8fb, #f3f8f4);
  border-radius: 20px;
  text-align: center;
}
.contact-qr {
  display: block;
  width: 240px;
  height: 240px;
  max-width: 100%;
  object-fit: contain;
  margin: 0 auto 18px;
  border: 10px solid #fff;
  border-radius: 10px;
}
.contact-qr-card figcaption {
  font-size: 13px;
  color: #61756b;
}
.contact-qr-actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 22px;
  font-size: 13px;
}
.contact-brief-section {
  background: #f6f8f5;
  border-block: 1px solid #e9eee7;
}
.contact-brief-heading {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 70px;
  align-items: end;
}
.contact-brief-heading .ac-lead {
  margin-bottom: 12px;
}
.contact-privacy {
  padding: 18px 20px;
  border: 1px solid #dfe8df;
  border-radius: 10px;
  background: #edf3ec;
  font-size: 12px;
  line-height: 1.8;
  margin: 25px 0 30px;
  color: #526c59;
}
.contact-composer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 38px;
  align-items: start;
}
.contact-field {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 22px;
}
.contact-field label {
  color: #314d3e;
  font-size: 14px;
}
.contact-field label span {
  color: #5f7168;
  font-size: 11px;
  padding-left: 8px;
}
.contact-field input,
.contact-field textarea {
  width: 100%;
  padding: 13px 15px;
  border: 1px solid #dce5dc;
  border-radius: 8px;
  background: #fff;
  color: #2b4536;
  font: inherit;
  font-size: 14px;
  line-height: 1.7;
  resize: vertical;
}
.contact-field input::placeholder,
.contact-field textarea::placeholder {
  color: #5f7168;
  font-size: 12px;
}
.contact-field input:focus-visible,
.contact-field textarea:focus-visible,
.contact-preview:focus-visible {
  outline: 2px solid #16734d;
  outline-offset: 3px;
}
.contact-short-fields {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}
.contact-preview-card {
  padding: 26px;
  background: #fff;
  border: 1px solid #dfe8df;
  border-radius: 16px;
}
.contact-preview-heading {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
}
.contact-preview-heading label {
  font-size: 15px;
  color: #314d3e;
}
.contact-preview-heading span {
  font-size: 10px;
  color: #7a6c4c;
  background: #f8f2e5;
  padding: 4px 9px;
  border-radius: 20px;
}
.contact-preview {
  width: 100%;
  border: 0;
  background: #fff;
  color: #52695b;
  padding: 22px 0;
  resize: vertical;
  font: inherit;
  font-size: 13px;
  line-height: 1.8;
  min-height: 280px;
}
.contact-brief-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.contact-brief-actions .el-button {
  margin: 0;
  min-height: 43px;
  padding: 12px 18px;
  border-radius: 7px;
}
.contact-copy-button {
  --el-button-bg-color: #16734d;
  --el-button-text-color: #fff;
  --el-button-border-color: #16734d;
  --el-button-hover-bg-color: #105b3c;
  --el-button-hover-text-color: #fff;
  --el-button-hover-border-color: #105b3c;
  --el-button-disabled-bg-color: #e7ece8;
  --el-button-disabled-border-color: #e7ece8;
  --el-button-disabled-text-color: #8c9991;
}
.contact-download-button {
  --el-button-text-color: #176449;
  --el-button-border-color: #d8e4da;
  --el-button-hover-bg-color: #edf5ee;
  --el-button-hover-text-color: #176449;
  --el-button-hover-border-color: #a8c7b3;
}
.contact-brief-actions .el-button:focus-visible {
  outline: 3px solid #16734d;
  outline-offset: 3px;
}
.contact-status {
  min-height: 44px;
  font-size: 11px;
  line-height: 1.8;
  margin: 16px 0 0;
  color: #5f7168;
}
.contact-next {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 70px;
}
.contact-next p {
  max-width: 520px;
}
.contact-next .ac-link {
  display: inline-block;
  margin-top: 12px;
}
@media (max-width: 900px) {
  .contact-start {
    gap: 45px;
  }
  .contact-composer {
    gap: 24px;
  }
  .contact-short-fields {
    grid-template-columns: 1fr;
    gap: 0;
  }
}
@media (max-width: 680px) {
  .contact-hero {
    padding-bottom: 35px;
  }
  .contact-start,
  .contact-brief-heading,
  .contact-composer,
  .contact-next {
    grid-template-columns: 1fr;
    gap: 28px;
  }
  .contact-start {
    padding-bottom: 55px;
  }
  .contact-qr-card {
    max-width: 390px;
    width: 100%;
    justify-self: center;
    padding: 25px;
  }
  .contact-brief-heading {
    gap: 12px;
  }
  .contact-preview-card {
    padding: 20px;
  }
  .contact-next {
    gap: 10px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .contact-page * {
    transition: none !important;
    animation: none !important;
  }
}
</style>
