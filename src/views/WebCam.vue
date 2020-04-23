 <template>
  <div class="column is-half has-background-warning has-text-centered">
    <video
      ref="video2"
      playsinline
      style="
            -webkit-transform: scaleX(-1);
            transform: scaleX(-1);             
            visibility: hidden;
            width: auto;
            height: auto;
            position: absolute;
          "
    ></video>
    <canvas ref="output2" width="400" height="600" class="canvas" />
    <p v-if="score!=null" class="is-size-3 has-text-centered">Your Score: {{score}}</p>
  </div>
</template>