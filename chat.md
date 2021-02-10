So here's what we need to do:

- Make imports and exports work as intended:
  ```html
  <script type="module">
    import _$ from 'bijou.js';
    //Do something with _$
  </script>
  ```
  - Also with normal script:src's
  ```html
  <script src="bijou.js"></script>
  <script>
    //Do something with _$
  </script>
  ```
