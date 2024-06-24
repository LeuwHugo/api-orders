const supabase = require('../services/supabaseClient');

const getAllOrders = async (req, res, next) => {
  try {
    const { data, error } = await supabase
      .from('orders')
      .select('*');
    if (error) throw error;
    res.json(data);
  } catch (error) {
    next(error);
  }
};

const getOrderById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    res.json(data);
  } catch (error) {
    next(error);
  }
};

const createOrder = async (req, res, next) => {
  try {
    const { customer_id, status } = req.body;
    const { data, error } = await supabase
      .from('orders')
      .insert([{ customer_id, status }]);
    if (error) throw error;
    res.json(data);
  } catch (error) {
    next(error);
  }
};

const updateOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { customer_id, status } = req.body;
    const { data, error } = await supabase
      .from('orders')
      .update({ customer_id, status })
      .eq('id', id);
    if (error) throw error;
    res.json(data);
  } catch (error) {
    next(error);
  }
};

const deleteOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('orders')
      .delete()
      .eq('id', id);
    if (error) throw error;
    res.json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};
