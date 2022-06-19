// Make pop when data submitted
$("#add_user").submit(function(event){
    alert("Data Saved SuccessFully");
});

$("#update_user").submit(function(event){
    event.preventDefault();     // Prevent Reload the site

    var unindexed_array = $(this).serializedArray();    // Getting all the data to this array
    console.log(unindexed_array);
})