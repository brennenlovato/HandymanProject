class CreateWorkers < ActiveRecord::Migration[7.0]
  def change
    create_table :workers do |t|
      t.text :first_name
      t.text :last_name

      t.timestamps
    end
  end
end
