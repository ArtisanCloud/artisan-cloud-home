<template>
  <section class="contact-qr">
    <div class="container">
      <h1 class="gradient-text">{{ $t('contact.title') }}</h1>
      <p class="intro text-muted">{{ $t('contact.intro') }}</p>

      <div class="qr-card">
        <div class="qr-wrapper">
          <img src="/images/wx-qr-code.jpg" alt="WeChat QR Code" class="qr-code" />
          <div class="qr-glow"></div>
        </div>
        
        <div class="qr-instructions">
          <h3>{{ $t('contact.qrTitle') }}</h3>
          <p class="instruction-text" v-html="$t('contact.qrInstruction')"></p>
          <div class="tips">
            <p>{{ $t('contact.qrTip') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// QR code contact page
</script>

<style scoped>
.contact-qr {
  text-align: center;
  padding: 40px 0 80px;
}

.intro {
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.qr-card {
  background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 24px;
  padding: 48px 32px;
  max-width: 480px;
  margin: 0 auto;
  backdrop-filter: blur(12px);
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.qr-wrapper {
  position: relative;
  padding: 12px;
  background: #fff;
  border-radius: 12px;
  margin-bottom: 32px;
}

.qr-code {
  width: 200px;
  height: 200px;
  display: block;
}

.qr-glow {
  position: absolute;
  inset: -2px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  z-index: -1;
  opacity: 0.5;
  filter: blur(8px);
}

.qr-instructions h3 {
  font-size: 24px;
  margin-bottom: 16px;
  color: #fff;
}

.instruction-text {
  font-size: 16px;
  color: var(--text);
  line-height: 1.6;
  margin-bottom: 24px;
}

.highlight {
  color: var(--primary);
  font-weight: 600;
}

.tips {
  font-size: 14px;
  color: var(--muted);
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,0.1);
}

.alternative-contact {
  margin-top: 32px;
}

.link-muted {
  color: var(--muted);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
}

.link-muted:hover {
  color: var(--primary);
}
</style>