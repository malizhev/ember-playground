import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-playground/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rental', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.setProperties({
      rental: {
        id: 'grand-old-mansion',
        type: 'rental',
        title: 'Grand Old Mansion',
        owner: 'Veruca Salt',
        city: 'San Francisco',
        location: {
          lat: 37.7749,
          lng: -122.4194,
        },
        category: 'Estate',
        bedrooms: 15,
        image:
          'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
        description:
          'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.',
      },
    });

    await render(hbs`<Rental @rental={{this.rental}}/>`);

    assert.dom('.rental').exists();
    assert.dom('.rental .details h3').hasText('Grand Old Mansion');
    assert.dom('.rental .details .owner').hasText('Owner: Veruca Salt');
    assert.dom('.rental .details .type').hasText('Type: Standalone');
    assert.dom('.rental .details .location').hasText('Location: San Francisco');
    assert.dom('.rental .details .bedrooms').hasText('Number of bedrooms: 15');
  });

  test('it correctly computes the rental type', async function (assert) {
    const assertRentalType = async (
      category: string,
      expected: 'Standalone' | 'Community',
    ) => {
      this.setProperties({
        rental: {
          category,
        },
      });

      await render(hbs`<Rental @rental={{this.rental}}/>`);
      assert.dom('.rental .details .type').hasText(`Type: ${expected}`);
    };

    await assertRentalType('Condo', 'Community');
    await assertRentalType('Townhouse', 'Community');
    await assertRentalType('Apartment', 'Community');
    await assertRentalType('Estate', 'Standalone');
    await assertRentalType('Anything else', 'Standalone');
  });
});
