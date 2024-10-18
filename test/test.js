import { is_valid_phone, validateMessage } from '../unalib/index.js';
import assert from 'assert';

// Pruebas
describe('unalib validation tests', function() {

  describe('Phone number validation', function() {
      it('should return true for a valid phone number (8431-9577)', function() {
          assert.equal(unalib.is_valid_phone('8431-9577'), true);
      });
  });
  
//Validacion urls
  describe('URL validation', function() {
      const testCases = [
          {
              description: 'should validate an image URL',
              message: 'https://example.com/image.jpg',
              expected: '<img src="https://example.com/image.jpg"',
          },
          {
              description: 'should validate a video URL',
              message: 'https://example.com/video.mp4',
              expected: '<video',
          }
      ];

      testCases.forEach(({ description, message, expected }) => {
          it(description, function() {
              const msg = JSON.stringify({ nombre: 'Usuario', mensaje: message });
              const validMsg = JSON.parse(unalib.validateMessage(msg));
              assert(validMsg.mensaje.includes(expected));
          });
      });
  });

  describe('Script injection prevention', function() {
      it('should prevent script injection', function() {
          const msg = JSON.stringify({ nombre: 'Usuario', mensaje: '<script>alert("hack")</script>' });
          const validMsg = unalib.validateMessage(msg);
          assert(validMsg.includes('&lt;script&gt;'));
      });
  });
});
